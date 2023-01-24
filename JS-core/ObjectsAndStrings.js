let string1 = "Tampa";
let string2 = string1;
string1 = "Venice";

console.log(string2);

////////////////////////////////

let person1 = {
  name: "Alex",
  age: 30,
};

let person2 = person1;

person2.name = "Kyle";

console.log(person1);
