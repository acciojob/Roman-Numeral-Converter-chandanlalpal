function convertToRoman(num) {
  if (num <= 0 || num > 10000) {
    return ""; // handle error or out of range
  }

  // Merge normal + special cases in descending order
  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(0));       // Should return an error or empty string
console.log(convertToRoman(100000));  // Should return an error or empty string
console.log(convertToRoman(-5));      // Should return an error or empty string
console.log(convertToRoman(1));       // I
console.log(convertToRoman(3999));     // CMXLIV
