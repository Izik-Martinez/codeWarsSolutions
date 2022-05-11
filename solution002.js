function descendingOrder(n) {
    // n can be any non-negative integer
    // return the original integer with its digits in descending order
    // aka, return the highest number possible with the given digits
    // Ex.) input: 42145 output: 54421

    // Convert n into an array
    let arrayOfDigits = Array.from(String(n), Number);
    // Sort the array of digits in descending order
    arrayOfDigits.sort(function(a,b){return b-a});
    // Convert back into a string
    let newNum = arrayOfDigits.join("");
    // Convert back into a number and return the final result
    return parseInt(newNum);
}