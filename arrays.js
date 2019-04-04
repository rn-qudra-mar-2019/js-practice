let students = [
  {name: "Delman"},
  {name: "Iman"},
  {name: "Mohammed"},
  {name: "Frya"},
  {name: "Sarbast"}
];

// 'foo'.toUpperCase()
console.log(students)

console.log(
  students.map(function(x) {
    return x.name.toUpperCase();
  })
)
// ['Delman', 'Iman', 'Mohammed', 'Frya', 'Sarbast']

console.log(
  students.filter(function(x) {
    return x.name.length > 4;
  }).map(function(x) {
    return [...x.name].reverse().join('');
  })
)