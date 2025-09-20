const symbol = [
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

let num = 14;  // Example 1 → XIV
// let num = 798; // Example 2 → DCCXCVIII
let result = "";

symbol.forEach(([key, val]) => {
    while (num >= val) {
        num -= val;
        result += key;
    }
});

console.log(result);
