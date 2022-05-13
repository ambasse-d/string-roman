function arabicToRoman(number) {
    const dict = [
      [1000,'M'],
      [500,'D'],
      [100, 'C'],
      [50 , 'L'],
      [10 , 'X'],
      [5 , 'V'],
      [3 , 'III'],
      [2 , 'II'],
      [1 ,'I'],
    ]

    let result = ""

    for (let e = 0; e < dict.length; e++) {
      // console.log(dict[e][0])
      if ( number >= dict[e][0]){
        result += dict[e][1]
      }
    }

    // if (number === 1 || 
    //     number === 2 || 
    //     number === 3 ||
    //     number === 5 || 
    //     number === 10 || 
    //     number === 50 || 
    //     number === 100 || 
    //     number === 500 || 
    //     number === 1000) {
    //   result +=  dict[number]
    // }

    

    return result
  }

module.exports = { arabicToRoman };

// arabicToRoman(3)