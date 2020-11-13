enum Roll {
  ADMIN,
  READER,
  AUTHOR,
}

// type infersion
const person = {
  name: 'momin',
  age: 18,
  hobbies: ['none', 'none!'],
  role: [Roll.ADMIN, Roll[0]],
};

// person.role.push(22);
// person.role[0] = 22;

console.log(Roll);
