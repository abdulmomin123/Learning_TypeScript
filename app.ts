const mixedArr: (number | string)[] = ['22', 'hi', 'hi'];

enum Role {
  ADMIN,
  READER,
  AUTHOR,
}

const person = {
  name: 'momin',
  age: 18,
  role: [Role.ADMIN],
};

console.log(person);
