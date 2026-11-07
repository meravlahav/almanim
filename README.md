# almanim · מידע לאלמנות ולאלמנים

[![CI](https://github.com/meravlahav/almanim/actions/workflows/ci.yml/badge.svg)](https://github.com/meravlahav/almanim/actions/workflows/ci.yml)
[![Weekly link check](https://github.com/meravlahav/almanim/actions/workflows/links.yml/badge.svg)](https://github.com/meravlahav/almanim/actions/workflows/links.yml)

**Live site: [almanim.co.il](https://almanim.co.il)** (Hebrew, RTL)

A free, volunteer-built guide for widows and widowers in Israel. Answer two questions (how your spouse died, and whether you have children and how old they are) and the site shows only what applies to you:

- **Rights and benefits** (22): survivors' pension, grants, tax credits, Ministry of Defense and terror-victim benefits. Each one has its eligibility, amount, how to apply, and a link to the official source.
- **Support organizations** (31): non-profits offering support groups, children's programs, legal and financial help.
- **Next steps** (40): practical tasks by stage, from the first days through the first year.

It is written in memory of Niv. No ads, no tracking, no accounts.

---

## What's in this repository

```
index.html              The whole site: one static page (HTML + CSS + vanilla JS)
data/
  rules.js              Eligibility rules – shared by the site, the tests and the MCP server
  site.js               Texts, causes of death, stages, sources
  rights.js             Rights and benefits
  organizations.js      Support organizations
  tasks.js              Next steps
lib/load-data.js        Loads data/*.js in Node exactly as the browser sees them
tests/                  Automated tests (node:test, no test framework needed)
scripts/check-links.js  Checks every external link in the content
mcp/                    MCP server so AI agents can answer from the same verified data
.github/workflows/      CI and the weekly link check
```

The site is hosted on **GitHub Pages** with a custom domain. It has no backend and no build step on the server. The content is maintained and reviewed in a spreadsheet, then compiled into the `data/*.js` files.

### One source of truth for eligibility

Whether a right applies to someone depends on two things: the cause of death and the ages of the children. That logic lives in a single module, [`data/rules.js`](data/rules.js). The **browser**, the **tests** and the **MCP server** all load that same file. A rule tested in CI is the same rule a user sees on the site and the same rule an AI agent answers with.

---

## Tests and CI

Every push runs [`ci.yml`](.github/workflows/ci.yml) (`npm test`, 200+ checks on Node 22):

| Test file | What it protects |
| --- | --- |
| `tests/rules.test.js` | **Eligibility rules.** Real scenarios: a war widow is sent to the Ministry of Defense and not to the National Insurance survivors' pension; terror victims get the terror-victims track; the pension for people without children disappears once a child is entered; age-limited benefits apply only at the exact ages (inclusive bounds). Plus an exhaustive check that every cause × every family situation gets at least one right, one organization and one task, so nobody lands on an empty page. |
| `tests/data.test.js` | **Data integrity.** Unique, well-formed ids; only known causes, stages and children rules; valid age ranges; dates in `DD.MM.YYYY`; every right has an official link and a source; valid URLs; phone numbers that dial correctly on mobile (Israeli formats, `*` short codes, WhatsApp in international format); every cause of death has rights and organizations. |
| `tests/mcp.test.js` | **MCP server end to end.** Starts the server as a real process and talks to it through the official MCP client, the way Claude Desktop would. Checks the tool list, read-only annotations, filtering, sources on every answer, Hebrew search and error handling. |
| `tests/check-links.test.js` | **The link checker itself**, against a local HTTP server (no internet needed). |

I checked that the tests catch real mistakes: deliberately breaking the data (a right shown to the wrong group, a bad URL, an off-by-one age limit) makes them fail.

### Weekly link check

[`links.yml`](.github/workflows/links.yml) runs every Sunday morning and can also be started by hand. It visits every external link in the content (about 90) and writes a report to the run summary:

- ❌ **broken** (404/410, or the domain no longer exists): the run fails and GitHub sends an email.
- 🕓 **did not answer** (timeout, 5xx) and ⚠️ **blocked automated visitors** (401/403/429): listed for a manual check, but the run still passes. Government sites often refuse bots or time out for servers abroad, and those cases shouldn't send false alarms.

---

## MCP server

[Model Context Protocol](https://modelcontextprotocol.io) server over the site's data. With it, an AI assistant can answer *"my husband died of cancer and I have a 12-year-old, what am I entitled to?"* from the reviewed data, using the same rules as the site, instead of guessing from the web.

| Tool | Purpose |
| --- | --- |
| `list_causes` | Causes of death with Hebrew labels and English names |
| `find_rights` | Rights for a `cause` and `child_ages`, filtered exactly like the site |
| `get_right` | Full details of one right (eligibility, amount, how to apply, deadline) |
| `find_organizations` | Support organizations by cause, children's ages and type of help |
| `get_tasks` | Next steps, optionally by stage |
| `search` | Free-text search across all content (Hebrew) |

Design choices:
- **Read-only.** All tools are annotated `readOnlyHint`, and the server never goes to the network.
- **Answers can be cited.** Every response includes the data date (`data_as_of`), the official `sourceUrl` of each item, and a disclaimer that this is general information, not legal advice.
- **Validated input.** Inputs are checked with zod schemas (an unknown cause or id returns a clear error the agent can recover from).
- **Logic kept separate from the protocol.** `mcp/tools.js` holds the logic and `mcp/server.mjs` only wires it to MCP.

### Run it

```bash
git clone https://github.com/meravlahav/almanim.git
cd almanim
npm ci
npm run mcp          # stdio server
```

**Claude Code:**
```bash
claude mcp add almanim -- node /absolute/path/to/almanim/mcp/server.mjs
```

**Claude Desktop** (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "almanim": {
      "command": "node",
      "args": ["/absolute/path/to/almanim/mcp/server.mjs"]
    }
  }
}
```

---

## Local development

```bash
npm ci
npm test               # all tests
npm run check-links    # link report (needs internet)
python3 -m http.server # then open http://localhost:8000
```

Requires Node.js 20 or later.

## Accessibility and privacy

- Built to Israeli Standard 5568 and WCAG 2.1 AA. Tested with axe (0 violations), with keyboard-only navigation, and on mobile.
- Phone numbers dial on tap.
- Nothing is stored on a server and there are no cookies or analytics. The user's answers live only in the page address.

## Disclaimer

General information only, not legal, financial or professional advice. Amounts and conditions change. Always check with the official body linked from each item.

---

Built by **Merav Lahav** as a volunteer project, with AI-assisted development (Claude).
