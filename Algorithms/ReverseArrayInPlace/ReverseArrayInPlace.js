// my solution
function reverseArrayInPlace(array) {
  // reverse array
  // return reverced array
  let length = array.length - 1

  for (let i = 0; i < length / 2; i++) {
    let head = array[i]
    let tail = array[length - i]
    array[i] = tail
    array[length - i] = head
  }

  return array
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9])

// ------------------------------------------------------------------------------------------------
// book solution
function reverseArrayInPlace2(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const tempVar = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tempVar
  }

  return array
}

reverseArrayInPlace2([1, 2, 3, 4, 5, 6, 7, 8, 9])
