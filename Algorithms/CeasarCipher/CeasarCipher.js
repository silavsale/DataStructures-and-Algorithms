function ceasarCipher(str, num) {
  num %= 26

  const lowerCaseString = str.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let newString = ''

  for (let i = 0; i < lowerCaseString.length; i++) {
    const currentLetter = lowerCaseString[i]
    if (currentLetter === ' ') {
      newString += currentLetter
      continue
    }

    const currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    if (newIndex > 25) newIndex -= 26
    if (newIndex < 0) newIndex = 26 + newIndex

    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else newString += alphabet[newIndex]
  }

  return newString
}

ceasarCipher('Zoo Keeper', 2)
ceasarCipher('Javascript', -900)
