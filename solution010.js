const runLengthEncoding = 
    // Accepts a string
    // Returns an array of pairs
    // Each pair includes a character from the string and how many times it occurs in the string
    // Array should be able to be concatenated into the original string
    // Ex.) runLengthEncoding("hello world!") =>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
   
    str => (str.match(/(.)\1*/g) || []).map(x => [x.length, x[0]]);





 