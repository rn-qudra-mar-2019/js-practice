for (let i = 1; i <= 100; i++) {
  console.log(i)
}

let result = '';
for (let i = 1; i <= 10;i++) {
  result += i + ' ';
}
console.log(result)


for (let i = 0; i < 5; i++) {
  let s = i + ' ';

  for (let j = 0; j < 5; j++) {
    s += j + " ";
    // s = s + j + ' '
  }

  console.log(s);
}

let r = Math.random();
while (r < .5) {
  console.log(r)
  r = Math.random();
}

do {
  console.log('Iteration of do..while');
} while(2 === 3);

for (let i = 0; i <= 20; i+= 2) {
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log('Without loop');
Array.from({length: 20})
  .map((_, i) => i + 1)
  .filter(x => x % 2 === 0)
  .forEach(x => console.log(x))