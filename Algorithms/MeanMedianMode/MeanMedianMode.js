function getMean(array) {
  let sum = 0
  array.forEach((element) => {
    sum += element
  })

  sum /= array.length

  //   return parseInt(sum)
  return sum
}

function getMedian(array) {
  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < array.length; y++) {
      if (array[i] < array[y]) {
        let a, b
        a = array[i]
        b = array[y]
        array[y] = a
        array[i] = b
      }
    }
  }

  let middle = array.length / 2

  parseInt(middle)
  console.log(array[parseInt(middle - 1)], array[parseInt(middle)])
  if (array.length % 2 === 1) {
    return array[parseInt(middle)]
  } else return getMean([array[middle - 1], array[middle]])
}

function getMode(array) {
  let newArray = []
  let newArray2 = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      newArray.push(array[i])
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      newArray2.push(newArray[i])
    }
  }

  if (newArray2.length !== 0) {
    return newArray2
  } else return newArray
}

function meanMedianMode(array) {
  const mean = getMean(array)
  const median = getMedian(array)
  const mode = getMode(array)

  return { mean, median, mode }
}

meanMedianMode([6, 1, 7, 3, 4, 1, 6, 2, 8, 3])
