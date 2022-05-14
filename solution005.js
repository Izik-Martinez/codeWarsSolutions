function createPhoneNumber(numbers){
  // numbers is an array of 10 integers
  // Will return the 10 integers in this telephone number format "(123) 456-7890"
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    let phoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    return phoneNumber

}


// -----shortened version-----

function newCreatePhoneNumber(numbers) {
    let fillIn = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        fillIn = fillIn.replace("x", numbers[i])
    }
    return fillIn;
}