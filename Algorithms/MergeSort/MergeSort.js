const mergeSort = (array) => {
  const array1 = []
  const array2 = []

  for (let i = 0; i < array.length; i++) {
    if (i < array.length / 2) {
      array1.push(array[i])
      if (i > 0 && array1[i - 1] > array1[i]) {
        const temp = array1[i - 1]
        array1[i - 1] = array1[i]
        array1[i] = temp
      }
    } else {
      array2.push(array[i])
    }
  }

  merge(array1, array2)
}

const merge = (array1, array2) => {
  const arrayNew = []

  arrayNew.push(array1)
  arrayNew.push(array2)

  return arrayNew
}

mergeSort([11, 7, 4, 1, 15, 12, 3])
