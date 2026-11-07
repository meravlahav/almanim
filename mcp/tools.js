'use strict';
/*
 * The MCP server's logic, kept free of any MCP plumbing so it can be tested directly.
 * Every answer is built from the same verified content files and the same eligibility
 * rules the website uses, and always carries the data date, official sources and a
 * disclaimer – so an AI agent can cite where an answer came from.
 */
const { loadData } = require('../lib/load-data');
const { isVisible } = require('../data/rules.js');

const DISCLAIMER =
  'General information from almanim.co.il, not legal or financial advice. ' +
  'Amounts and conditions change – verify with the official source (sourceUrl) before acting.';

// English names so agents that do not read Hebrew can still pick the right cause id.
const CAUSE_EN = {
  cancer: 'cancer',
  illness: 'other illness (incl. heart disease, long illness)',
  sudden: 'sudden medical death (e.g. cardiac arrest, stroke)',
  road: 'road accident',
  suicide: 'suicide',
  war: 'war or security service (IDF, police, security forces)',
  murder: 'murder',
  accident: 'other accident (e.g. drowning, fall)',
  work: 'work accident (incl. commuting)',
  terror: 'terror attack / hostile action',
};

function createTools(data = loadData()) {
  const { site, rights, tasks, organizations } = data;
  const causeIds = site.categories.map((c) => c.id);
  const stageIds = site.stages.map((s) => s.id);

  const envelope = (results, extra = {}) => ({
    data_as_of: site.asOf,
    disclaimer: DISCLAIMER,
    ...extra,
    results,
  });

  const profileOf = (args = {}) => ({ cause: args.cause || null, childAges: args.child_ages ?? null });

  const rightView = (r) => ({
    id: r.id,
    title: r.title,
    summary: r.summary,
    eligibility: r.eligibility,
    amount: r.amount || null,
    howToApply: r.howToApply,
    deadline: r.deadline || null,
    note: r.note || null,
    dependsOn: r.flags.map((f) => `${f.label}: ${f.text}`),
    childrenCondition: childCondition(r),
    officialUrl: r.officialUrl,
    sourceUrl: r.sourceUrl,
    asOf: r.asOf,
  });

  const orgView = (o) => ({
    id: o.id,
    name: o.name,
    description: o.oneLiner,
    audience: o.audience,
    helpTags: o.helpTags,
    location: o.location,
    website: o.website || null,
    phone: o.phone ? o.phone.display : null,
    whatsapp: o.whatsapp || null,
    email: o.email || null,
    registerUrl: o.registerUrl || null,
    howToJoin: o.howToJoin || null,
    childrenCondition: childCondition(o),
    sourceUrl: o.sourceUrl || o.website || null,
    asOf: o.asOf,
  });

  const taskView = (t) => ({
    id: t.id,
    stage: t.stage,
    stageLabel: (site.stages.find((s) => s.id === t.stage) || {}).label,
    title: t.title,
    condition: t.condition || null,
    whatToDo: t.what,
    withWhom: t.withWhom || null,
    documents: t.documents || null,
    timing: t.timing || null,
    childrenCondition: childCondition(t),
    link: t.link || null,
    asOf: t.asOf,
  });

  function childCondition(item) {
    if (item.kidsRule === 'noKidsOnly') return 'only for people without children';
    if (item.kidsRule === 'childInRange') return `for a child aged ${item.childAgeMin}–${item.childAgeMax}`;
    return null;
  }

  function assertCause(cause) {
    if (cause && !causeIds.includes(cause)) throw new Error(`Unknown cause "${cause}". Use one of: ${causeIds.join(', ')}`);
  }

  return {
    causeIds,
    stageIds,

    listCauses() {
      return envelope(
        site.categories.map((c) => ({ id: c.id, label: c.label, english: CAUSE_EN[c.id] || null, hint: c.hint || null })),
        { usage: 'Pass the id as "cause" to the other tools. Omit "cause" to get information for every situation.' }
      );
    },

    findRights(args = {}) {
      assertCause(args.cause);
      const profile = profileOf(args);
      return envelope(rights.filter((r) => isVisible(r, profile)).map(rightView), { profile });
    },

    getRight({ id }) {
      const r = rights.find((x) => x.id === id);
      if (!r) throw new Error(`No right with id "${id}". Ids look like R01.`);
      return envelope([rightView(r)], { appliesToCauses: r.categories });
    },

    findOrganizations(args = {}) {
      assertCause(args.cause);
      const profile = profileOf(args);
      let list = organizations.filter((o) => isVisible(o, profile));
      if (args.help_tag) list = list.filter((o) => o.helpTags.some((t) => t.includes(args.help_tag)));
      return envelope(list.map(orgView), { profile, availableHelpTags: [...new Set(organizations.flatMap((o) => o.helpTags))] });
    },

    getTasks(args = {}) {
      assertCause(args.cause);
      if (args.stage && !stageIds.includes(args.stage)) throw new Error(`Unknown stage "${args.stage}". Use one of: ${stageIds.join(', ')}`);
      const profile = profileOf(args);
      let list = tasks.filter((t) => isVisible(t, profile));
      if (args.stage) list = list.filter((t) => t.stage === args.stage);
      return envelope(list.map(taskView), { profile });
    },

    search({ query }) {
      const q = String(query || '').trim();
      if (q.length < 2) throw new Error('Search query must be at least 2 characters.');
      const hit = (...fields) => fields.some((f) => typeof f === 'string' && f.includes(q));
      const results = [
        ...rights.filter((r) => hit(r.title, r.summary, r.eligibility, r.amount, r.howToApply, r.note)).map((r) => ({ type: 'right', id: r.id, title: r.title, sourceUrl: r.sourceUrl })),
        ...organizations.filter((o) => hit(o.name, o.oneLiner, o.audience, ...o.helpTags)).map((o) => ({ type: 'organization', id: o.id, title: o.name, sourceUrl: o.sourceUrl || o.website })),
        ...tasks.filter((t) => hit(t.title, t.what, t.withWhom, t.documents)).map((t) => ({ type: 'task', id: t.id, title: t.title, sourceUrl: t.link || null })),
      ];
      return envelope(results, { query: q, tip: 'Content is in Hebrew – search with Hebrew words, e.g. "קצבת שאירים".' });
    },
  };
}

module.exports = { createTools, DISCLAIMER };
