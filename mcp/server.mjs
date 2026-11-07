#!/usr/bin/env node
/*
 * almanim MCP server
 * ------------------
 * Lets AI agents (Claude Desktop, Claude Code, any MCP client) answer questions for
 * widows and widowers in Israel from the site's verified data – with the same
 * eligibility rules the website uses, and with sources on every answer.
 *
 * Run:  npm run mcp        (stdio transport)
 */
import { createRequire } from 'node:module';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const require = createRequire(import.meta.url);
const { createTools } = require('./tools.js');

const tools = createTools();
const pkg = require('../package.json');

const server = new McpServer(
  { name: 'almanim', version: pkg.version },
  {
    instructions:
      'Information for widows and widowers in Israel: rights and benefits, support organizations, and practical next steps. ' +
      'Start with list_causes, then call find_rights / find_organizations / get_tasks with the cause id and, if known, the children\'s ages. ' +
      'Content is in Hebrew. Always share the sourceUrl and remind the user to verify amounts with the official source.',
  }
);

const cause = z.enum(tools.causeIds).optional().describe('Cause-of-death id from list_causes. Omit to include every situation.');
const childAges = z
  .array(z.number().int().min(0).max(40))
  .optional()
  .describe('Ages of the children in whole years. [] = no children. Omit if unknown (nothing is filtered by children).');

const readOnly = { readOnlyHint: true, openWorldHint: false };

function reply(fn) {
  return async (args) => {
    try {
      return { content: [{ type: 'text', text: JSON.stringify(fn(args), null, 2) }] };
    } catch (err) {
      return { isError: true, content: [{ type: 'text', text: err.message }] };
    }
  };
}

server.registerTool(
  'list_causes',
  { title: 'List causes of death', description: 'The causes of death the site filters by, with Hebrew labels and English names.', annotations: readOnly },
  reply(() => tools.listCauses())
);

server.registerTool(
  'find_rights',
  {
    title: 'Find rights and benefits',
    description: 'Rights, allowances and grants that apply to a surviving spouse, filtered exactly like the website (cause of death and children\'s ages).',
    inputSchema: { cause, child_ages: childAges },
    annotations: readOnly,
  },
  reply((args) => tools.findRights(args))
);

server.registerTool(
  'get_right',
  {
    title: 'Get one right',
    description: 'Full details of a single right by id (e.g. R01): eligibility, amount, how to apply, deadline and official links.',
    inputSchema: { id: z.string().regex(/^R\d{2}$/).describe('Right id, e.g. R01') },
    annotations: readOnly,
  },
  reply((args) => tools.getRight(args))
);

server.registerTool(
  'find_organizations',
  {
    title: 'Find support organizations',
    description: 'Non-profits and organizations that offer support, filtered by cause of death, children\'s ages and type of help.',
    inputSchema: {
      cause,
      child_ages: childAges,
      help_tag: z.string().optional().describe('Type of help in Hebrew, e.g. "קבוצות תמיכה", "ילדים ונוער", "סיוע כלכלי".'),
    },
    annotations: readOnly,
  },
  reply((args) => tools.findOrganizations(args))
);

server.registerTool(
  'get_tasks',
  {
    title: 'Get next steps',
    description: 'Practical steps after a loss (bureaucracy, banks, inheritance, insurance, children), by stage.',
    inputSchema: {
      cause,
      child_ages: childAges,
      stage: z.enum(tools.stageIds).optional().describe('firstDays, firstMonth, firstThreeMonths, firstYear or ongoing'),
    },
    annotations: readOnly,
  },
  reply((args) => tools.getTasks(args))
);

server.registerTool(
  'search',
  {
    title: 'Search the content',
    description: 'Free-text search across rights, organizations and tasks. Content is in Hebrew.',
    inputSchema: { query: z.string().min(2).describe('Words to search for, in Hebrew') },
    annotations: readOnly,
  },
  reply((args) => tools.search(args))
);

await server.connect(new StdioServerTransport());
