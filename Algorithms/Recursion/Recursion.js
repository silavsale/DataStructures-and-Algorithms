// factorial
const recursion = (num) => {
  if (num === 1) {
    return num
  }
  return num * recursion(num - 1)
}

recursion(4)
