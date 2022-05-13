function arabicToRoman(number) {
    const I = 'I';
    const V = 'V';
    const X = 'X';
    const L = 'L';
    const C = 'C';
    const D = 'D';
    const M = 'M';

    let result = ""

    if (number<=3){
      for (let e = 0; e < number; e++) {
        result += I;
      }
    }

    if (number === 5) result +=  V
    if (number === 10) result +=  X
    if (number === 50) result +=  L
    if (number === 100) result +=  C
    if (number === 500) result +=  D
    if (number === 1000) result +=  M

    return result
  }

module.exports = { arabicToRoman };
