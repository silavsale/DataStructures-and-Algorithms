let list1 = [1, 2, 3, 4, 5]
const list2 = list1
list1.push(6, 7, 8)

list1 = [10, 20, 30]

console.log(list1)
console.log(list2)

let charA = 'a'
const charB = charA

charA = 'b'

console.log(charA)
console.log(charB)

const array1 = [1, 2, 3, 4, 5]
// let array2 = array1.slice();
// let array2 = array1.concat([]);
const array2 = [...array1]

array1.push(6, 7, 8)

console.log('array1', array1)
console.log('array2', array2)
