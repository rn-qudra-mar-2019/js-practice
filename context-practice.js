'use strict';
const validNumbers = [0, 1, 2, 3, 5, 8, 13, 21];

const p1 = {
  id: 4,
  isValidId() {
    return validNumbers.filter((x) => {
      return x === this.id
    }).length !== 0;
  }
}

console.log(p1.isValidId())
console.log(({...p1, id: 3}).isValidId())
