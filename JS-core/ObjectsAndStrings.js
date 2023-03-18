let string1 = 'Tampa'
const string2 = string1
string1 = 'Venice'

console.log(string2)

/// /////////////////////////////

const person1 = {
  name: 'Alex',
  age: 30,
}

const person2 = person1

person2.name = 'Kyle'

console.log(person1)
