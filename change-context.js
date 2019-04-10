function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

const obj = {
  firstName: 'Mohammed',
  lastName: 'Tami',
};

const obj2 = {
  firstName: 'Abdullah',
  lastName: 'Ahmed',
};

// console.log(getFullName.call(obj));
// console.log(getFullName.call(obj2));

let a = ['Tami', '1,2', 3,true, {}, 2]

Array.prototype.push.call(obj, ...a)
console.log(Array.prototype.slice.call(obj))

const bound = Array.prototype.slice.bind(obj)
console.log(bound())


// console.log({ ...a
//  })
//  // Like the line below
// console.log({ 
//   firstName: 'Mohammed',
//   lastName: 'Tami',
//  })
