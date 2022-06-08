const i = word => {
    if ( word === '' || word[0].toLowerCase() === 'i' || word[0] === word[0].toLowerCase() ) return 'Invalid word';
    if ( word.replace(/[aeiou]/gi, '').length * 2 <= word.length ) return 'Invalid word'
    return `i${word}`
  }