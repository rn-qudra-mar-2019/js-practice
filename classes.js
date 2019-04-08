class Car
{
  constructor(name) {
    if (!name) throw new Error('Cannot create car object')

    this.name = name;
    this.isStarted = false;
  }

  getName() {
    return this.name;
  }
  start() {
    this.isStarted = true;
  }
}

const c = new Car('Yaris')

console.log(c.getName())
console.log(c.isStarted);
c.start();
console.log(c.isStarted);

class Student2
{
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = null;
  }

  getEmail() {
    return this.email;
  }

  setEmail(value) {
    this.email = value;
  }
}

const s = new Student('Ali', 'Azad', 22);
s.setEmail('JonDoe@example.com');
console.log(s.getEmail())

s.setEmail('JonDoe@email.com');
console.log(s.getEmail())
