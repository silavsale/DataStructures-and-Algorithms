const bubbleSort = (arrOfNum) => {
  let iteration = 0

  for (let i = 0; i < arrOfNum.length; i++) {
    for (let y = 1; y < arrOfNum.length; y++) {
      if (arrOfNum[y - 1] > arrOfNum[y]) {
        let temp = arrOfNum[y - 1]
        arrOfNum[y - 1] = arrOfNum[y]
        arrOfNum[y] = temp
      }
      iteration++
    }
  }
  console.log(iteration)
  return arrOfNum
}

bubbleSort([999, 5, 3, 8, 2, 1, 4, 11, 33, 55, 7, 99])
