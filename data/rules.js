/*
 * Eligibility / visibility rules for almanim.co.il
 * ------------------------------------------------
 * One source of truth, used by:
 *   - the website (index.html)      -> window.ALMANIM_RULES
 *   - the test suite (tests/)       -> require('../data/rules.js')
 *   - the MCP server (mcp/)         -> require('../data/rules.js')
 *
 * An item is a right, organization or task from the data files. Each item has:
 *   categories : ["all"] or a list of cause-of-death ids (e.g. "cancer", "war")
 *   kidsRule   : "any" | "noKidsOnly" | "childInRange"
 *   childAgeMin, childAgeMax : used when kidsRule === "childInRange"
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ALMANIM_RULES = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /** Does the item apply to this cause of death? (no cause chosen = show everything) */
  function matchesCause(item, cause) {
    if (!cause) return true;
    return item.categories.includes('all') || item.categories.includes(cause);
  }

  /**
   * Does the item apply to this family?
   * childAges === null/undefined means "the user did not say" -> do not filter by children.
   * childAges === [] means "no children".
   */
  function matchesChildren(item, childAges) {
    if (childAges == null) return true;
    if (item.kidsRule === 'noKidsOnly') return childAges.length === 0;
    if (item.kidsRule === 'childInRange') {
      return childAges.some(function (age) { return age >= item.childAgeMin && age <= item.childAgeMax; });
    }
    return true;
  }

  /** The single rule the whole site uses to decide what a person sees. */
  function isVisible(item, profile) {
    profile = profile || {};
    return matchesCause(item, profile.cause) && matchesChildren(item, profile.childAges);
  }

  return { matchesCause: matchesCause, matchesChildren: matchesChildren, isVisible: isVisible };
});
