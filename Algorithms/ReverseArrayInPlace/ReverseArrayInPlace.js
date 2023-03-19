// my solution
function reverseArrayInPlace(arr) {
  const array = arr
  // reverse array
  // return reverced array
  const length = array.length - 1

  for (let i = 0; i < length / 2; i++) {
    const head = array[i]
    const tail = array[length - i]
    array[i] = tail
    array[length - i] = head
  }

  return array
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9])

// ------------------------------------------------------------------------------------------------
// book solution
function reverseArrayInPlace2(arr) {
  const array = arr
  for (let i = 0; i < array.length / 2; i++) {
    const tempVar = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tempVar
  }

  return array
}

reverseArrayInPlace2([1, 2, 3, 4, 5, 6, 7, 8, 9])
