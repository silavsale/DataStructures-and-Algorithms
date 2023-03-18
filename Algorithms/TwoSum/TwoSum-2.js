const twoSum = (numArray, sum) => {
  const pairs = []
  const hashTable = []

  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i]
    const counterPart = sum - currNum
    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart])
    }
    hashTable.push(currNum)
  }
  console.log(hashTable)
  return pairs
}

twoSum([1, 6, 4, 5, 3, 3], 7)
