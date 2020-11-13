// type infersion
var person = {
    name: 'momin',
    age: 18,
    hobbies: ['none', 'none!']
};
person.hobbies[0] = 'gaming';
console.log(person.hobbies[0]);
