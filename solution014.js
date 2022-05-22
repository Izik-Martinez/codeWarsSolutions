function repeatStr (n, s) {
  // Given a string, repeat it n times
    let newArr = [];
     for (let i = 0; i < n; i++) {
     (newArr.push(s)) * 3;
       }
     return newArr.join("")
   }