// 1. Function that receives another function and calls it
function receivesAFunction(callback) {
  callback();   // just call the function passed in
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    return "I am a named function!";
  }
  return namedFunction;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am anonymous!";
  };
}

// export functions so tests can see them (if needed)
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
