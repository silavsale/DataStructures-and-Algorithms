const binarySearch = (numArray, key) => {
  const middleIdx = Math.floor(numArray.length / 2)
  const middleElem = numArray[middleIdx]
  if (key === middleElem) {
    // return true
    return middleElem
  } if (key > middleElem && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key)
  } if (key < middleElem && numArray.length > 1) {
    console.log(numArray.slice(-middleIdx))
    return binarySearch(numArray.splice(0, middleIdx), key)
  } return false
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 3)
