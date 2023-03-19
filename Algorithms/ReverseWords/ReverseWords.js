const reverseWords = (string) => {
  const arrayOfWords = string.split(' ')
  let reversedArrayOfWords = ''

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i] !== undefined) {
      // arrayOfWords[i].length
      let reversedWord = ''
      for (let y = arrayOfWords[i].length; y >= 0; y--) {
        if (arrayOfWords[i][y] !== undefined) {
          reversedWord += arrayOfWords[i][y]
        }
      }
      if (i !== arrayOfWords.length - 1) {
        reversedWord += ' '
      }
      reversedArrayOfWords += reversedWord
    }
  }

  console.log(reversedArrayOfWords)
  return reversedArrayOfWords
}

reverseWords('this is a string of words')
