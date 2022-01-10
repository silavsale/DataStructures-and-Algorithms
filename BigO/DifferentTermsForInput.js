// O(a) + O(b) = O(a + b)
function logTime(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i)
  }
  for (let j = 0; j < b; j++) {
    console.log(j)
  }
}

// O(a) * O(b) = O(a * b)
function logTime(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j)
    }
  }
}
