// const a = [3, 5, 8, 20, 1, 2, 12, 17];
// const a: number[] = [11, 7, 4, 1, 15, 12, 3];
const a: number[] = [4, 3, 2, 1];
let b: number[] = [];

function mergeSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1: number[], array2: number[]): number[] {
  let result: number[] = [];

  while (array1.length && array2.length) {
    let minElem;
    if (array1[0] < array2[0]) {
      minElem = array1.shift();
    } else {
      minElem = array2.shift();
    }

    result.push(minElem);
  }

  if (array1.length) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }
  return result;
}

mergeSort(a);

export {};
