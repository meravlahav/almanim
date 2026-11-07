'use strict';
/*
 * Data integrity tests: every content file must be well-formed before it reaches users.
 * Run: npm test
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const { loadData } = require('../lib/load-data');

const { site, rights, tasks, organizations } = loadData();
const CAUSES = site.categories.map((c) => c.id);
const STAGES = site.stages.map((s) => s.id);
const KIDS_RULES = ['any', 'noKidsOnly', 'childInRange'];
const DATE = /^\d{2}\.\d{2}\.\d{4}$/;
const ALL_ITEMS = [
  ...rights.map((x) => ['right', x]),
  ...tasks.map((x) => ['task', x]),
  ...organizations.map((x) => ['organization', x]),
];

function isUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

test('content files load and are not empty', () => {
  assert.ok(rights.length > 0, 'no rights');
  assert.ok(tasks.length > 0, 'no tasks');
  assert.ok(organizations.length > 0, 'no organizations');
  assert.match(site.asOf, DATE, 'site.asOf must look like DD.MM.YYYY');
});

test('ids are unique and follow the naming pattern', () => {
  for (const [list, prefix] of [[rights, 'R'], [tasks, 'T'], [organizations, 'O']]) {
    const ids = list.map((x) => x.id);
    assert.equal(new Set(ids).size, ids.length, `duplicate ${prefix} ids: ${ids}`);
    for (const id of ids) assert.match(id, new RegExp(`^${prefix}\\d{2}$`), `bad id ${id}`);
  }
});

test('cause-of-death ids are unique', () => {
  assert.equal(new Set(CAUSES).size, CAUSES.length);
});

for (const [kind, item] of ALL_ITEMS) {
  test(`${kind} ${item.id}: filtering fields are valid`, () => {
    assert.ok(Array.isArray(item.categories) && item.categories.length > 0, 'categories must be a non-empty list');
    for (const c of item.categories) {
      assert.ok(c === 'all' || CAUSES.includes(c), `unknown cause "${c}"`);
    }
    if (item.categories.includes('all')) assert.equal(item.categories.length, 1, '"all" must stand alone');
    assert.ok(KIDS_RULES.includes(item.kidsRule), `unknown kidsRule "${item.kidsRule}"`);
    if (item.kidsRule === 'childInRange') {
      assert.ok(Number.isInteger(item.childAgeMin) && Number.isInteger(item.childAgeMax), 'child ages must be whole numbers');
      assert.ok(item.childAgeMin >= 0 && item.childAgeMin <= item.childAgeMax, 'childAgeMin must be <= childAgeMax');
    } else {
      assert.equal(item.childAgeMin, null);
      assert.equal(item.childAgeMax, null);
    }
    assert.match(item.asOf, DATE, 'asOf must look like DD.MM.YYYY');
  });
}

for (const r of rights) {
  test(`right ${r.id}: required text and official links`, () => {
    for (const field of ['title', 'summary', 'eligibility', 'howToApply']) {
      assert.ok(typeof r[field] === 'string' && r[field].trim().length > 0, `missing ${field}`);
    }
    assert.ok(isUrl(r.officialUrl), `officialUrl is not a valid link: ${r.officialUrl}`);
    assert.ok(isUrl(r.sourceUrl), `sourceUrl is not a valid link: ${r.sourceUrl}`);
    for (const f of r.flags) {
      assert.ok(['income', 'local', 'work'].includes(f.type), `unknown flag type ${f.type}`);
      assert.ok(f.label && f.text, 'flag needs a label and an explanation');
    }
  });
}

for (const t of tasks) {
  test(`task ${t.id}: stage and text`, () => {
    assert.ok(STAGES.includes(t.stage), `unknown stage "${t.stage}"`);
    assert.ok(t.title && t.what, 'task needs a title and a description');
    if (t.link) assert.ok(isUrl(t.link), `bad link: ${t.link}`);
  });
}

for (const o of organizations) {
  test(`organization ${o.id}: reachable contact details`, () => {
    assert.ok(o.name && o.oneLiner, 'organization needs a name and a description');
    const channels = [o.website, o.phone, o.whatsapp, o.email].filter(Boolean);
    assert.ok(channels.length > 0, 'organization must have at least one way to contact it');
    if (o.website) assert.ok(isUrl(o.website), `bad website: ${o.website}`);
    if (o.registerUrl) assert.ok(isUrl(o.registerUrl), `bad registration link: ${o.registerUrl}`);
    if (o.email) assert.match(o.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, `bad email: ${o.email}`);
    if (o.phone) {
      assert.ok(o.phone.display && o.phone.tel, 'phone needs display and tel');
      assert.match(o.phone.tel, /^(\+972\d{8,9}|\*\d{4}|1\d{3,9})$/, `tel link is not dialable: ${o.phone.tel}`);
    }
    if (o.whatsapp) assert.match(o.whatsapp, /^\+972\d{9}$/, `bad WhatsApp number: ${o.whatsapp}`);
  });
}

test('every cause of death has at least one right and one organization', () => {
  for (const cause of CAUSES) {
    const fits = (x) => x.categories.includes('all') || x.categories.includes(cause);
    assert.ok(rights.some(fits), `no rights for ${cause}`);
    assert.ok(organizations.some(fits), `no organizations for ${cause}`);
  }
});

test('the info card points to an organization that exists', () => {
  const ref = site.infoCard && site.infoCard.relatedOrganizationId;
  if (ref) assert.ok(organizations.some((o) => o.id === ref), `unknown organization ${ref}`);
});
