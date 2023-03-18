const reverseWords = (string) => {
  const arrayOfWords = string.split(' ')
  const reversedArrayOfWords = []

  arrayOfWords.forEach((word) => {
    let reversedWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i]
    }
    reversedArrayOfWords.push(reversedWord)
  })

  return reversedArrayOfWords.join(' ')
}

reverseWords('this is a string of words')
