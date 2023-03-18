const square = (n) => {
  let result = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1
    }
  }

  return result
}

square(10)
