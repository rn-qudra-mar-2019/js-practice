'use strict';

const person = {
  name: 'Frya',
  getName() {
    return this.name;
  },
  getName2: () => this.name,
  getName3() {
    return () => this.name;
  },
  getName4() {
    return function() {
      return this.name;
    }
  }
}

const cat = {
  name: 'Tom'
}

cat.f = person.getName
person.f = cat.f;

const f = cat.f;

console.log(cat.f())
console.log(person.f())

const f2 = person.getName2;
console.log(person.getName2())
console.log(f2())


const g = person.getName3()
cat.g = g;
console.log( g())
console.log( cat.g());

const g2 = person.getName4();
// console.log( g2())