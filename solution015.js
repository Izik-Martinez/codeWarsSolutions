function sumTwoSmallestNumbers(numbers) {  
    //Given an array of numbers, return the sum of the lowest two

   let sum = numbers.sort((a, b) => a - b).slice(0, 2);
    return sum[0] + sum[1];
  }