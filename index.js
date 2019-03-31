const minimumAge = 18;

let name = 'Mohammed'
let age = 10;

if (age >= minimumAge) {
  console.log("You can vote")
} else if (age === minimumAge - 1) {
  console.log("One year ahead!")
} else {
  console.log("You cannot vote")
}