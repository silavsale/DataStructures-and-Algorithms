const myArray = [11, 3, 23, 7]

// O(1)
myArray.push(17)
console.log(myArray)
myArray.pop()
console.log(myArray)

// O(n)
myArray.shift()
console.log(myArray)
myArray.unshift(11)
console.log(myArray)
