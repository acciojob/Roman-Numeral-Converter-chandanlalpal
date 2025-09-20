let num = 14;  // Example 1 → XIV
// let num = 798; // Example 2 → DCCXCVIII

if (num <= 0 || num > 100000) {
    console.log(""); // Handle error or out of range
} else {
    let result = "";

    symbol.forEach(([key, val]) => {
        while (num >= val) {
            num -= val;
            result += key;
        }
    });

    console.log(result);
}