const binarySearch = (numArray, key) => {
  let middleIdx = Math.floor(numArray.length / 2)
  let middleElem = numArray[middleIdx]
  if (key === middleElem) {
    // return true
    return middleElem
  } else if (key > middleElem && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key)
  } else if (key < middleElem && numArray.length > 1) {
    console.log(numArray.slice(-middleIdx))
    return binarySearch(numArray.splice(0, middleIdx), key)
  } else return false
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 3)
