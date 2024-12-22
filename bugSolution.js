function foo(x) {
  if (x === null || x === undefined || !x) {
    return 0;
  } else {
    return x.length;
  }
}

console.log(foo(null)); // This will now return 0.
console.log(foo(undefined)); // This will now return 0.
console.log(foo([1, 2, 3])); // This will still work fine.
console.log(foo(0)); // this will return 0.