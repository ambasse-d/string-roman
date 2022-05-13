function arabicToRoman(number) {
    const dict = {
      1 : 'I',
      2 : 'II',
      3 : 'III',
      5 : 'V',
      10 : 'X',
      50 : 'L',
      100 : 'C',
      500 : 'D',
      1000 : 'M',
    }

    let result = ""

    if (number === 1 || number === 2 || number === 3 ||number === 5 || number === 10 || number === 50 || number === 100 || number === 500 || number === 1000) {
      result +=  dict[number]
    }
    console.log(result)

    return result
  }

module.exports = { arabicToRoman };

// arabicToRoman(3)