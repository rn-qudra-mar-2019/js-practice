const minimumAge = 18;

let name = 'Mohammed'
let age = 16;


if (age >= minimumAge && age <= 100) {
  console.log("You can vote")
} else if (age === minimumAge - 1 || age === 101 ) {
  console.log("One year ahead!")
} else {
  console.log("You cannot vote")
}