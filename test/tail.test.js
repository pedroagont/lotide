const assert = require('chai').assert;
const tail = require('../js/tail');

describe('#tail', () => {
  it("returns 3 for tail(['hello', true, 'friends', 123]).length", () => {
    assert.strictEqual(tail(['hello', true, 'friends', 123]).length, 3);
  });

  it("returns true for tail(['hello', true, 'friends', 123])[0]", () => {
    assert.strictEqual(tail(['hello', true, 'friends', 123])[0], true);
  });

  it("returns 'friends' for tail(['hello', true, 'friends', 123])[1]", () => {
    assert.strictEqual(tail(['hello', true, 'friends', 123])[1], 'friends');
  });
});
