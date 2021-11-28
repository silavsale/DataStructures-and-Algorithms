const twoSum = (numArray, sum) => {
  const array = []
  for (let i = 0; i < numArray.length; i++) {
    for (let y = 1; y < numArray.length; y++) {
      if (numArray[i] + numArray[y] === sum) {
        array.push([numArray[i], numArray[y]])
      }
    }
  }

  return array
}

twoSum([1, 6, 4, 5, 3, 3], 7)
