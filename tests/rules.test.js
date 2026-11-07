'use strict';
/*
 * Eligibility rule tests.
 * They check the real rule module the website uses (data/rules.js) against the real
 * content, using concrete situations a widow or widower might be in.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const { isVisible, matchesCause, matchesChildren } = require('../data/rules.js');
const { loadData } = require('../lib/load-data');

const { site, rights, tasks, organizations } = loadData();
const byId = Object.fromEntries([...rights, ...tasks, ...organizations].map((x) => [x.id, x]));
const shownRights = (profile) => rights.filter((r) => isVisible(r, profile)).map((r) => r.id);

// ---------- the rule module itself ----------

test('no profile at all shows everything', () => {
  for (const item of [...rights, ...tasks, ...organizations]) assert.ok(isVisible(item, {}));
});

test('"all" items are shown for every cause of death', () => {
  const item = { categories: ['all'], kidsRule: 'any' };
  for (const c of site.categories) assert.ok(matchesCause(item, c.id));
});

test('unknown children (skipped question) never hides anything', () => {
  assert.ok(matchesChildren({ kidsRule: 'noKidsOnly' }, null));
  assert.ok(matchesChildren({ kidsRule: 'childInRange', childAgeMin: 12, childAgeMax: 13 }, undefined));
});

test('child age range is inclusive at both ends', () => {
  const item = { kidsRule: 'childInRange', childAgeMin: 12, childAgeMax: 13 };
  assert.ok(matchesChildren(item, [12]));
  assert.ok(matchesChildren(item, [13]));
  assert.ok(!matchesChildren(item, [11]));
  assert.ok(!matchesChildren(item, [14]));
  assert.ok(matchesChildren(item, [5, 13]), 'one child in range is enough');
});

// ---------- real situations, real content ----------

test('war widow: Ministry of Defense route, not the National Insurance survivors pension', () => {
  const shown = shownRights({ cause: 'war' });
  assert.ok(shown.includes('R19'), 'Ministry of Defense benefits must be shown');
  for (const id of ['R01', 'R02', 'R27']) assert.ok(!shown.includes(id), `${id} must not be shown to war widows`);
  assert.ok(!shown.includes('R20'), 'terror-victim benefits must not be shown');
});

test('terror victim family: National Insurance hostilities route only', () => {
  const shown = shownRights({ cause: 'terror' });
  assert.ok(shown.includes('R20'));
  assert.ok(!shown.includes('R19'));
  assert.ok(!shown.includes('R01'));
});

test('illness (most common case): survivors pension and death grant are shown', () => {
  const shown = shownRights({ cause: 'cancer' });
  for (const id of ['R01', 'R03', 'R27']) assert.ok(shown.includes(id), `${id} missing for cancer`);
  for (const id of ['R19', 'R20', 'R21', 'R09', 'R25']) assert.ok(!shown.includes(id), `${id} must not be shown for cancer`);
});

test('road accident: compensation, work-injury dependents and support centers', () => {
  const shown = shownRights({ cause: 'road' });
  for (const id of ['R21', 'R09', 'R22']) assert.ok(shown.includes(id), `${id} missing for road accident`);
});

test('murder: dedicated support for families of murder victims', () => {
  assert.ok(shownRights({ cause: 'murder' }).includes('R25'));
  assert.ok(!shownRights({ cause: 'suicide' }).includes('R25'));
});

test('survivors grant (R02) is only for people without children', () => {
  assert.equal(byId.R02.kidsRule, 'noKidsOnly');
  assert.ok(shownRights({ cause: 'cancer', childAges: [] }).includes('R02'));
  assert.ok(!shownRights({ cause: 'cancer', childAges: [4] }).includes('R02'));
});

test('bar/bat mitzvah grant (R05) only appears for a 12–13 year old', () => {
  assert.ok(shownRights({ cause: 'illness', childAges: [12] }).includes('R05'));
  assert.ok(shownRights({ cause: 'illness', childAges: [13] }).includes('R05'));
  assert.ok(!shownRights({ cause: 'illness', childAges: [8, 15] }).includes('R05'));
});

test('orphan study allowance (R04) follows its 13–20 age range', () => {
  assert.ok(shownRights({ cause: 'sudden', childAges: [16] }).includes('R04'));
  assert.ok(!shownRights({ cause: 'sudden', childAges: [10] }).includes('R04'));
});

test('death grant (R03) applies to every cause of death', () => {
  for (const c of site.categories) assert.ok(shownRights({ cause: c.id }).includes('R03'), `R03 missing for ${c.id}`);
});

test('every situation gets at least one right, organization and task', () => {
  const ageSets = [null, [], [3], [12], [17], [25]];
  for (const c of site.categories) {
    for (const childAges of ageSets) {
      const profile = { cause: c.id, childAges };
      const label = `${c.id} / children ${JSON.stringify(childAges)}`;
      assert.ok(rights.some((x) => isVisible(x, profile)), `no rights for ${label}`);
      assert.ok(organizations.some((x) => isVisible(x, profile)), `no organizations for ${label}`);
      assert.ok(tasks.some((x) => isVisible(x, profile)), `no tasks for ${label}`);
    }
  }
});
