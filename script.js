function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = "";

  // Special cases mapping for subtractive notation
  const specialCases = {
    900: "CM",
    400: "CD",
    90: "XC",
    40: "XL",
    9: "IX",
    4: "IV"
  };

  // First check for special cases
  for (let key in specialCases) {
    while (num >= key) {
      result += specialCases[key];
      num -= key;
    }
  }

  // Then check normal symbols
  for (let i = 0; i <= 6; i++) {
    const [symbol, value] = obj[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example tests
console.log(convertToRoman(14));   // XIV
// console.log(convertToRoman(798));  // DCCXCVIII
// console.log(convertToRoman(36));   // XXXVI

// do not edit below this line
module.exports = convertToRoman;
