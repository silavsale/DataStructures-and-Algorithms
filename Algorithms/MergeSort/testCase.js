const nums = [4, 3, 2, 1, 6, 6]

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const firstHalf = arr.slice(0, middle)
  const secondHalf = arr.slice(middle)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function merge(arr1, arr2) {
  let result = []
  while (arr1.length && arr2.length) {
    let temp = []
    if (arr1[0] < arr2[0]) {
      temp = arr1.shift()
    } else {
      temp = arr2.shift()
    }
    result.push(temp)
  }

  if (arr1.length) {
    result = result.concat(arr1)
  } else {
    result = result.concat(arr2)
  }

  return result
}

mergeSort(nums)

export {}
