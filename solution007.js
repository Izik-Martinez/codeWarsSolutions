function spinWords (str) {
        //Writing a function that accepts a string of multiple words, spaces allowed
    // The function will return a new string that flips each word over five letters in the original string
    // Ex.) spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test"
    return str.split(" ").map((element) => {
        return (element.length > 4) ? element.split("").reverse().join("") : element;
    }).join(" ");
}  