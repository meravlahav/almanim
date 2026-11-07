'use strict';
/*
 * End-to-end test of the MCP server: starts it as a real process and talks to it
 * through the official MCP client, the same way Claude Desktop or Claude Code would.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const SERVER = path.join(__dirname, '..', 'mcp', 'server.mjs');

async function connect() {
  const { Client } = await import('@modelcontextprotocol/sdk/client/index.js');
  const { StdioClientTransport } = await import('@modelcontextprotocol/sdk/client/stdio.js');
  const client = new Client({ name: 'almanim-tests', version: '1.0.0' });
  await client.connect(new StdioClientTransport({ command: process.execPath, args: [SERVER] }));
  return client;
}

const call = async (client, name, args = {}) => {
  const res = await client.callTool({ name, arguments: args });
  return { res, body: res.isError ? null : JSON.parse(res.content[0].text) };
};

test('MCP server end to end', async (t) => {
  const client = await connect();
  t.after(() => client.close());

  await t.test('advertises its tools as read-only', async () => {
    const { tools } = await client.listTools();
    const names = tools.map((x) => x.name).sort();
    assert.deepEqual(names, ['find_organizations', 'find_rights', 'get_right', 'get_tasks', 'list_causes', 'search']);
    for (const tool of tools) assert.equal(tool.annotations.readOnlyHint, true, `${tool.name} should be read-only`);
  });

  await t.test('every answer carries the data date and a disclaimer', async () => {
    const { body } = await call(client, 'list_causes');
    assert.match(body.data_as_of, /^\d{2}\.\d{2}\.\d{4}$/);
    assert.match(body.disclaimer, /not legal or financial advice/);
    assert.ok(body.results.some((c) => c.id === 'war' && c.english));
  });

  await t.test('find_rights applies the same rules as the website', async () => {
    const war = (await call(client, 'find_rights', { cause: 'war' })).body.results.map((r) => r.id);
    assert.ok(war.includes('R19'));
    assert.ok(!war.includes('R01'), 'war widows get the Ministry of Defense route, not the survivors pension');
    const noKids = (await call(client, 'find_rights', { cause: 'cancer', child_ages: [] })).body.results.map((r) => r.id);
    assert.ok(noKids.includes('R02'));
    const withKids = (await call(client, 'find_rights', { cause: 'cancer', child_ages: [12] })).body.results.map((r) => r.id);
    assert.ok(!withKids.includes('R02') && withKids.includes('R05'));
  });

  await t.test('every right has an official source to cite', async () => {
    const { body } = await call(client, 'find_rights');
    for (const r of body.results) assert.match(r.sourceUrl, /^https?:\/\//, `${r.id} has no source`);
  });

  await t.test('get_right returns full details', async () => {
    const { body } = await call(client, 'get_right', { id: 'R01' });
    assert.equal(body.results[0].id, 'R01');
    assert.ok(body.results[0].amount && body.results[0].howToApply);
  });

  await t.test('find_organizations filters by type of help', async () => {
    const { body } = await call(client, 'find_organizations', { cause: 'cancer', help_tag: 'ילדים ונוער' });
    assert.ok(body.results.length > 0);
    for (const o of body.results) assert.ok(o.helpTags.some((x) => x.includes('ילדים ונוער')));
  });

  await t.test('get_tasks filters by stage', async () => {
    const { body } = await call(client, 'get_tasks', { cause: 'illness', stage: 'firstDays' });
    assert.ok(body.results.length > 0);
    for (const task of body.results) assert.equal(task.stage, 'firstDays');
  });

  await t.test('search finds Hebrew content', async () => {
    const { body } = await call(client, 'search', { query: 'קצבת שאירים' });
    assert.ok(body.results.some((x) => x.id === 'R01'));
  });

  await t.test('bad input is rejected with a helpful error', async () => {
    const unknownCause = await client.callTool({ name: 'find_rights', arguments: { cause: 'flu' } });
    assert.equal(unknownCause.isError, true);
    const unknownRight = await call(client, 'get_right', { id: 'R99' });
    assert.equal(unknownRight.res.isError, true);
    assert.match(unknownRight.res.content[0].text, /No right with id/);
  });
});
