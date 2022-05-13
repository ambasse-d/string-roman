
let utils = require('../js/roman-numeral.js');

test('shoud return I when value equal 1', () => {
  expect(utils.arabicToRoman(1)).toBe('I');
})

test('shoud return I when value equal 2', () => {
  expect(utils.arabicToRoman(2)).toBe('II');
})

