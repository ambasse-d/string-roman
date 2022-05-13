function arabicToRoman(number) {
    if (number === 1) return 'I'
    if (number === 2) return 'II'
    if (number === 3) return 'III'
    if (number === 5) return 'V'
    if (number === 10) return 'X'
    if (number === 50) return 'L'
    if (number === 100) return 'C'

  }

module.exports = { arabicToRoman };
