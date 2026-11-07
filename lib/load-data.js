'use strict';
/*
 * Loads the site's content files (data/*.js) into plain JavaScript objects.
 * The same files the browser loads are read here, so the tests, the link
 * checker and the MCP server always work on exactly what the site shows.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const DATA_DIR = path.join(__dirname, '..', 'data');
const FILES = ['site', 'rights', 'tasks', 'organizations'];

function loadFile(name, dataDir) {
  const file = path.join(dataDir, `${name}.js`);
  const source = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename: file });
  const value = sandbox.window[`DATA_${name}`];
  if (value === undefined) throw new Error(`${file} did not define window.DATA_${name}`);
  return value;
}

function loadData(dataDir = DATA_DIR) {
  const out = {};
  for (const name of FILES) out[name] = loadFile(name, dataDir);
  return out;
}

module.exports = { loadData, DATA_DIR };
