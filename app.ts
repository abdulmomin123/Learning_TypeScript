const mixedArr: (number | string)[] = ['22', 'hi', 'hi'];

enum Role {
  ADMIN = 10,
  READER = 0,
  AUTHOR,
}

const person = {
  name: 'momin',
  age: 18,
  role: [Role.ADMIN],
};

console.log(Role);
