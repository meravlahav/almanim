'use strict';
/* Tests for the link checker itself, against a local server (no internet needed). */
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { collectLinks, classify, checkOne } = require('../scripts/check-links');
const { loadData } = require('../lib/load-data');

test('collects every link from the content, with where it is used', () => {
  const links = collectLinks(loadData());
  assert.ok(links.size > 50, `expected many links, got ${links.size}`);
  for (const [url, where] of links) {
    assert.match(url, /^https?:\/\//);
    assert.ok(where.length > 0);
  }
});

test('classifies HTTP answers', () => {
  assert.equal(classify(200), 'ok');
  assert.equal(classify(301), 'ok');
  assert.equal(classify(403), 'blocked');
  assert.equal(classify(429), 'blocked');
  assert.equal(classify(404), 'broken');
  assert.equal(classify(410), 'broken');
  assert.equal(classify(500), 'flaky');
});

test('checks real HTTP responses', async (t) => {
  const server = http.createServer((req, res) => {
    const routes = { '/ok': 200, '/gone': 404, '/forbidden': 403, '/error': 503 };
    if (req.url === '/no-head' && req.method === 'HEAD') { res.writeHead(405); return res.end(); }
    if (req.url === '/no-head') { res.writeHead(200); return res.end('hi'); }
    res.writeHead(routes[req.url] || 500);
    res.end();
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  assert.equal((await checkOne(`${base}/ok`)).result, 'ok');
  assert.equal((await checkOne(`${base}/gone`)).result, 'broken');
  assert.equal((await checkOne(`${base}/forbidden`)).result, 'blocked');
  assert.equal((await checkOne(`${base}/no-head`)).result, 'ok', 'falls back to GET when HEAD is refused');
  assert.equal((await checkOne(`${base}/error`)).result, 'flaky', 'server errors are warnings');
  assert.equal((await checkOne('http://127.0.0.1:1/nothing')).result, 'flaky', 'refused connection is a warning');
  assert.equal((await checkOne('https://no-such-domain.invalid/')).result, 'broken', 'a domain that does not exist is broken');
});
