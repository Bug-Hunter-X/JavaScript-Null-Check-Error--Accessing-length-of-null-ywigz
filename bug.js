function foo(x) {
  if (x === null) {
    return 0; // This is wrong!
  } else {
    return x.length;
  }
}

console.log(foo(null)); // This will throw an error because null doesn't have a length property.
console.log(foo([1, 2, 3])); // This will work fine.