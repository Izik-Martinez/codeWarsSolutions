function openOrSenior(data){
    // Function accepts a list (array) of pairs of numbers
    // In each pair, the first number is the person's age and the second number is their handicap
    // The function will return a list with a string of either "open" or "senior for each pair"
    // Ex.) input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    //      output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7){
            data[i] = "Senior"
        } else if (data[i][0] >= 55 && data[i][1] <= 7) {
            data[i] = "Open"    
        } else {
            data[i] = "Open"
        }   
    }
        return data;
  }

