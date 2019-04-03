function generateGreeting(name, greetWord) {
  return `${greetWord}, ${name}! ${Math.random()}`;
}

function greet(person) {
  console.log(generateGreeting(person, 'Howdy'));
}
// greet('Ahmed');

function divide(x, y) {
  if (y === 0) {
    return console.error('Cannot divide by zero');
    // throw Error('Cannot divide by zero');
  }
  return x / y;
}

console.log(divide(20, 2))
console.log(divide(20, 0))