const findLongestWord = (text: string) => {
  if (text.length === 0) {
    return '';
  }
  let word = '';
  let prevWord = '';

  for (let i = 0; i < text.length; i++) {
    word += text[i];

    if (text[i] === ' ') {
      if (prevWord.length < word.length) {
        prevWord = word;
      }
      word = '';
    }
  }

  return prevWord || word;
};

console.log(findLongestWord('')); // Output: ""
console.log(findLongestWord('One')); // Output: "One"
console.log(findLongestWord('Hello there')); // Output: "Hello"
console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: "jumps"
console.log(findLongestWord('Web development is exciting')); // Output: "development"
console.log(findLongestWord('OpenAI is revolutionizing AI')); // Output: "revolutionizing"
console.log(
  findLongestWord('This is a test sentence to find the longest word')
);
