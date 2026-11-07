#!/usr/bin/env node
'use strict';
/*
 * Weekly link check: visits every external link in the content files.
 *
 *   ok      – the page answered (2xx/3xx)
 *   blocked – the site refused an automated visitor (401/403/429). Common on
 *             government sites; reported as a warning, not a failure.
 *   flaky   – timeouts, connection resets and 5xx errors. Israeli government sites
 *             often time out for servers abroad, so these are warnings too.
 *   broken  – the page is gone (404/410) or the domain no longer exists. These fail
 *             the run so GitHub sends an e-mail and the link can be fixed.
 *
 * Usage: node scripts/check-links.js            (writes a Markdown report to stdout
 *                                                 and to $GITHUB_STEP_SUMMARY if set)
 */
const fs = require('node:fs');
const { loadData } = require('../lib/load-data');

const TIMEOUT_MS = 20000;
const CONCURRENCY = 6;
const USER_AGENT = 'Mozilla/5.0 (compatible; almanim-link-check/1.0; +https://almanim.co.il)';

function collectLinks(data) {
  const links = new Map(); // url -> list of places it appears
  const add = (url, where) => {
    if (!url || !/^https?:\/\//.test(url)) return;
    if (!links.has(url)) links.set(url, []);
    links.get(url).push(where);
  };
  for (const r of data.rights) {
    add(r.officialUrl, `${r.id} ${r.title} (official)`);
    add(r.sourceUrl, `${r.id} ${r.title} (source)`);
  }
  for (const t of data.tasks) add(t.link, `${t.id} ${t.title}`);
  for (const o of data.organizations) {
    add(o.website, `${o.id} ${o.name} (website)`);
    add(o.registerUrl, `${o.id} ${o.name} (registration)`);
    add(o.sourceUrl, `${o.id} ${o.name} (source)`);
  }
  for (const s of data.site.sources) add(s.url, `sources: ${s.name}`);
  for (const v of data.site.verifyContacts) add(v.url, `contacts: ${v.name}`);
  if (data.site.infoCard) add(data.site.infoCard.sourceUrl, 'info card');
  return links;
}

function classify(status) {
  if (status >= 200 && status < 400) return 'ok';
  if ([401, 403, 429].includes(status)) return 'blocked';
  if ([404, 410].includes(status)) return 'broken';
  return 'flaky';
}

async function checkOne(url) {
  for (const method of ['HEAD', 'GET']) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': USER_AGENT, accept: 'text/html,*/*' },
      });
      clearTimeout(timer);
      // Some servers reject HEAD; retry those with GET before judging.
      if (method === 'HEAD' && (res.status === 405 || res.status === 501 || res.status >= 400)) continue;
      return { status: res.status, result: classify(res.status) };
    } catch (err) {
      clearTimeout(timer);
      if (method === 'HEAD') continue;
      const code = err.name === 'AbortError' ? 'timeout' : (err.cause && err.cause.code) || err.message;
      return { status: 0, result: code === 'ENOTFOUND' ? 'broken' : 'flaky', error: code };
    }
  }
  return { status: 0, result: 'flaky', error: 'no response' };
}

async function runPool(items, worker) {
  const results = [];
  let next = 0;
  async function lane() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, lane));
  return results;
}

function report(rows) {
  const count = (k) => rows.filter((r) => r.result === k).length;
  const lines = [
    '# Link check',
    '',
    `Checked **${rows.length}** links: ✅ ${count('ok')} ok · ⚠️ ${count('blocked')} blocked automated visitors · 🕓 ${count('flaky')} did not answer · ❌ ${count('broken')} broken`,
    '',
  ];
  for (const [kind, title] of [['broken', '❌ Broken – please fix'], ['flaky', '🕓 Did not answer (timeout / server error) – open manually to confirm'], ['blocked', '⚠️ Blocked automated check – open manually to confirm']]) {
    const list = rows.filter((r) => r.result === kind);
    if (!list.length) continue;
    lines.push(`## ${title}`, '', '| Status | Link | Used in |', '| --- | --- | --- |');
    for (const r of list) lines.push(`| ${r.status || r.error} | ${r.url} | ${r.where.join('<br>')} |`);
    lines.push('');
  }
  return lines.join('\n');
}

async function main() {
  const links = collectLinks(loadData());
  const urls = [...links.keys()];
  const checked = await runPool(urls, checkOne);
  const rows = urls.map((url, i) => ({ url, where: links.get(url), ...checked[i] }));
  const md = report(rows);
  console.log(md);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
  const broken = rows.filter((r) => r.result === 'broken').length;
  process.exitCode = broken > 0 ? 1 : 0;
}

if (require.main === module) main();
module.exports = { collectLinks, classify, checkOne };
