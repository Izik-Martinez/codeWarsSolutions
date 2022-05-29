function direction(facing, turn) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const rotate = Math.floor(turn / 45);
   
    const indexOfDirection = directions.indexOf(facing);
    const facingFinalIndex = (indexOfDirection + rotate) % directions.length
    if (facingFinalIndex < 0) {
      return directions[directions.length - Math.abs(facingFinalIndex)]
    }
    return directions[facingFinalIndex]
  }