const data1 = "Jordan Smith";

const data2 = [].filter.call(data1, function (elem, index) {
  return index > 6;
});

// only 'read-only' Array methods can be used on strings: filter, forEach, map, some, every, ect.
// cannot use: push, pop, splice, shift, reverse, etc.
console.log(data2);
