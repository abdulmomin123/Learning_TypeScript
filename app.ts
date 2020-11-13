// type infersion
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'momin',
  age: 18,
  hobbies: ['none', 'none!'],
  role: [2, 'dev'],
};

// person.role.push(22);
// person.role[0] = 22;

console.log(person.role);
