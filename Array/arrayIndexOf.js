const myArray = [5];
let anotherArray = myArray;
anotherArray.push(3);
anotherArray = [];
myArray 

console.log([10, 20, 30, 40, 50].indexOf(30)); //2
console.log([{ name: "Pam" }, { name: "Kent" }].indexOf({ name: "Kent" })); // -1
console.log("hello world".indexOf("o")); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); // 1
console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray));
