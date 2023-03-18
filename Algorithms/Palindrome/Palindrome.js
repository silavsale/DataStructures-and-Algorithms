function isPalandrome(string) {
  string = string.toLowerCase()
  const charArr = string.split('')
  const validChar = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const letterArr = []
  charArr.forEach((char) => {
    if (validChar.indexOf(char) > -1) letterArr.push(char)
  })

  if (letterArr.join('') === letterArr.reverse().join('')) return true
  return false
}

isPalandrome('iMadam i\'m Adami')
