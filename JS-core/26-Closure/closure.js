function outer() {
  const state = 'bug'

  function inner() {
    return `Hello ${state}`
  }

  return inner
}

console.log(outer())

const message = outer()

console.log(message())
