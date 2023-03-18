// Constant runtime
function log(array) { // Big O Notation: "0 (1)"
  console.log(array[0])
  console.log(array[1])
}

log([1, 2, 3, 4])
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Linear runtime
function logAll(array) { // Big O Notation: "0 (n)"
  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
  }
}

logAll([1, 2, 3, 4])
logAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Exponential runtime
function addAndLog(array) { // Big O Notation: "0 (n^2)"
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j])
    }
  }
}

addAndLog(['A', 'B', 'C']) // 9 pair logged out
addAndLog(['A', 'B', 'C', 'D']) // 16 pair logged out
addAndLog(['A', 'B', 'C', 'D', 'E']) // 25 pair logged out

// Logorithmic runtime
function binarySearch(array, key) { // Big O Notation: 0 (log n)
  let low = 0
  let high = array.length - 1
  let mid
  let element

  while (low < high) {
    mid = Math.floor((low + high) / 2, 10)
    element = array[mid]
    if (element < key) {
      low = mid + 1
    } else if (element > key) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
