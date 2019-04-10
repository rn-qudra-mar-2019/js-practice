const obj = {};

Array.prototype.push.call(obj, 'ab', 'bc', 'cdaa');

console.log(obj);

console.log(
  Array.prototype
    .filter.call(obj, x => x.length < 3)
    .map(x => x.toUpperCase())
);