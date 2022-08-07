const assert = require('chai').assert;
const head = require('../js/head');

describe('#head', () => {
  it('returns 5 for head([5, 6, 7])', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'hello' for head(['hello', 'more', 'things'])", () => {
    assert.strictEqual(head(['hello', 'more', 'things']), 'hello');
  });

  it('returns 1 for head([1])', () => {
    assert.strictEqual(head([1]), 1);
  });

  it('returns undefined for head([])', () => {
    assert.strictEqual(head([]), undefined);
  });
});
