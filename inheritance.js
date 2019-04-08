class LivingObject
{
  constructor(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

class Human extends LivingObject
{
  constructor(firstName, lastName, age) {
    super(age);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(value) {
    this.firstName = value;
  }
  
  getLastName() {
    return this.lastName;
  }
}

class Animal extends LivingObject
{
  constructor(age) {
    super(age);
  }
}

class Student extends Human
{
  constructor(firstName, lastName, age, address) {
    super(firstName, lastName, age);

    this.address = address;
  }

  getAddress() {
    return this.address;
  }

  setAddress(value) {
    this.address = value;
  }
}

const s = new Student('Hoshyar', 'Ali', 22, '100m');

console.log(s.getFirstName());

class A {}

class B extends A {
  constructor(a) {
    super(); // You should always call super() in cosntructor()
  }
}

new B