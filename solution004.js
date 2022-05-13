const isSquare = function(n){
  // given n as an integral number(negative or postive)
  // return true if n is a quare number and false if it's not

  //Sqrt n then check if it's a whole number
  if (Math.sqrt(n) % 1 === 0) {
      return true;
  } else {return false;}
}