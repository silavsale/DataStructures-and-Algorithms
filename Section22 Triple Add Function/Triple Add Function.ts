// Currying
// Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn’t call a function. It just transforms it.

// Let’s see an example first, to better understand what we’re talking about, and then practical applications.

// We’ll create a helper function curry(f) that performs currying for a two-argument f. In other words, curry(f) for two-argument f(a, b) translates it into a function that runs as f(a)(b):

function tripleAdd(num1: number) {
  return function (num2: number) {
    return function (num3: number) {
      return num1 + num2 + num3;
    };
  };
}

tripleAdd(10)(20)(30);

export {};
