function likes(names) {
    // Accepts one argument, an array of names (strings)
    // Returns text that shows who likes a post
    // ex.) []                       -->  "no one likes this"
    // ["Peter"]                         -->  "Peter likes this"
    // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    // For more than four names, just increase the number before "others"


    // Write a conditional that accounts for names.length
    // Depending on the length of names, return a different string template literal

    if (names.length === 0){
        return "no one likes this";
    } else if (names.length === 1){
        return `${names[0]} likes this`;
    } else if (names.length === 2){
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }

}