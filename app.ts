// type infersion
const person = {
  name: 'momin',
  age: 18,
  hobbies: ['none', 'none!'],
};

person.hobbies.push('22');

console.log(person.hobbies[0]);
