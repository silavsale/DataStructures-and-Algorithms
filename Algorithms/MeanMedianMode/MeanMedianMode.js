// my solution
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
        let a; let
          b
        a = array[i]
        b = array[y]
        array[y] = a
        array[i] = b
      }
    }
  }

  const middle = array.length / 2

  parseInt(middle)
  console.log(array[parseInt(middle - 1)], array[parseInt(middle)])
  if (array.length % 2 === 1) {
    return array[parseInt(middle)]
  } return getMean([array[middle - 1], array[middle]])
}

function getMode(array) {
  const newObj = {}

  for (let i = 0; i < array.length; i++) {
    if (!newObj[array[i]]) {
      newObj[array[i]] = 0
    }
    newObj[array[i]]++
  }
  newObj

  let maxFrequency = 0
  let modes = []
  for (const num in newObj) {
    if (newObj[num] > maxFrequency) {
      modes = [num]
      maxFrequency = newObj[num]
    } else if (newObj[num] === maxFrequency) modes.push(num)
  }

  if (modes.length === Object.keys(newObj).length) {
    modes = []
  }

  return modes
}

function meanMedianMode(array) {
  const mean = getMean(array)
  const median = getMedian(array)
  const mode = getMode(array)

  return { mean, median, mode }
}

meanMedianMode([9, 9, 9, 5, 7, 7])
