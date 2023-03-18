// const bubbleSort = (arrOfNum) => {
//   let iteration = 0

//   for (let i = arrOfNum.length; i > 0; i--) {
//     for (let y = 0; y < i; y++) {
//       if (arrOfNum[y] > arrOfNum[y + 1]) {
//         const temp = arrOfNum[y]
//         arrOfNum[y] = arrOfNum[y + 1]
//         arrOfNum[y + 1] = temp
//       }
//       iteration++
//     }
//   }

//   console.log(iteration)
//   return arrOfNum
// }

// bubbleSort([999, 5, 3, 8, 2, 1, 4, 11, 33, 55, 7, 99])

const bubbleSort = (arrOfNum) => {
  let iteration = 0
  const arr = [...arrOfNum] // Create a new array that is a copy of arrOfNum

  for (let i = arr.length; i > 0; i--) {
    for (let y = 0; y < i; y++) {
      if (arr[y] > arr[y + 1]) {
        const temp = arr[y]
        arr[y] = arr[y + 1]
        arr[y + 1] = temp
      }
      iteration++
    }
  }

  console.log(iteration)
  return arr
}

bubbleSort([999, 5, 3, 8, 2, 1, 4, 11, 33, 55, 7, 99])
