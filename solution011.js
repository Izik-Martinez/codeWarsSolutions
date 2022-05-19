function XO(str) {
    
    //Accepts a string
    //  In a case insensitive manner, find how many x's and o's are in the string
    //and return "true" if there are the same amount and "false" if the count differs
    // Examples input/output:
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false
    
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case "X":
            case "x":
                countX += 1;
            break;
            case "O":
            case "o":
                countO += 1;
            break;
        }
    }
    if (countX == countO) {
        return true
    } else {return false}
}









