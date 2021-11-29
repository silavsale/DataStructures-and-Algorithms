// Memoization
// Runtime: O(n) - linear time
const fibMemo = (index, cache) => {
  cache = cache || []

  if (cache[index]) return cache[index]
  else {
    if (index < 3) {
      return 1
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache)
      console.log(cache[index])
    }
  }

  return cache[index]
}

fibMemo(70)
