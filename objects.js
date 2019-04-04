let person = {
  name: 'Janger',
  age: 29,
  address: {
    city: 'Erbil',
    street: '60m'
  },
  getName() {
    return this.name;
  },
  getAge: function() {
    return this.age;
  }
};

console.log(person.getName())