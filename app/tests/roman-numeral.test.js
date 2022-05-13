
let utils = require('../js/roman-numeral.js');

test('shoud return I when value equal 1', () => {
  expect(utils.arabicToRoman(1)).toBe('I');
})

test('shoud return II when value equal 2', () => {
  expect(utils.arabicToRoman(2)).toBe('II');
})

test('shoud return III when value equal 3', () => {
  expect(utils.arabicToRoman(3)).toBe('III');
})

test('shoud return V when value equal 5', () => {
  expect(utils.arabicToRoman(5)).toBe('V');
})

test('shoud return X when value equal 10', () => {
  expect(utils.arabicToRoman(10)).toBe('X');
})


test('shoud return L when value equal 50', () => {
  expect(utils.arabicToRoman(50)).toBe('L');
})

test('shoud return L when value equal 50', () => {
  expect(utils.arabicToRoman(50)).toBe('L');
})


test('shoud return C when value equal 100', () => {
  expect(utils.arabicToRoman(100)).toBe('C');
})

test('shoud return D when value equal 500', () => {
  expect(utils.arabicToRoman(500)).toBe('D');
})

test('shoud return M when value equal 1000', () => {
  expect(utils.arabicToRoman(1000)).toBe('M');
})