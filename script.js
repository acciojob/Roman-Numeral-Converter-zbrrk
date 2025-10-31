function convertToRoman(num) {
  if (num === 0) return 'N'; // Romans had no symbol for zero, 'N' (nulla) is sometimes used.

  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  // For large numbers (>=4000), use overline notation (represented here with parentheses)
  // e.g. 5000 -> (V), 10000 -> (X), 50000 -> (L), 100000 -> (C)
  const largeSymbols = [
    ['(C)', 100000],
    ['(L)', 50000],
    ['(X)', 10000],
    ['(V)', 5000],
    ['(IV)', 4000],
  ];

  // Handle numbers >= 4000 first
  for (let [symbol, value] of largeSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  // Handle standard roman numerals
  for (let [symbol, value] of romanSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example usage:
console.log(convertToRoman(14));   // XIV
console.log(convertToRoman(798));  // DCCXCVIII
console.log(convertToRoman(4000)); // (IV)
console.log(convertToRoman(100000)); // (C)


// Do not change the code below this line
window.convertToRoman = convertToRoman;


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
