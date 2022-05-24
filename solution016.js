function findOdd(arr) {
    
    //happy coding!

    //given an array of integers, return the one that appears an odd number of times
    // there will always be only one integer that appears an odd number of times

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[i] == arr[j] ? count++ : count;
        }
        if (count % 2 != 0) {
            return arr[i];
        }
    }
  }


