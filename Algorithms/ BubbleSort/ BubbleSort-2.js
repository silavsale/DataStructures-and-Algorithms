const bubbleSort = (arrOfNum) => {
  let iteration = 0

  for (let i = arrOfNum.length; i > 0; i--) {
    for (let y = 0; y < i; y++) {
      if (arrOfNum[y] > arrOfNum[y + 1]) {
        let temp = arrOfNum[y]
        arrOfNum[y] = arrOfNum[y + 1]
        arrOfNum[y + 1] = temp
      }
      iteration++
    }
  }

  console.log(iteration)
  return arrOfNum
}

bubbleSort([999, 5, 3, 8, 2, 1, 4, 11, 33, 55, 7, 99])
