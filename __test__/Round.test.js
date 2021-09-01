/* eslint-disable eol-last */
/* eslint-disable no-undef */
const Round = require('../src/Round');

test('probar random', () => {
  const round = new Round();
  expect(round.setTriedValue(10)).toBe(10);
});

test('increase bonuses', () => {
  const round = new Round();
  expect(round.isStrike(5)).toBe(15);
});