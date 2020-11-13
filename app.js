var Roll;
(function (Roll) {
    Roll[Roll["ADMIN"] = 0] = "ADMIN";
    Roll[Roll["READER"] = 1] = "READER";
    Roll[Roll["AUTHOR"] = 2] = "AUTHOR";
})(Roll || (Roll = {}));
// type infersion
var person = {
    name: 'momin',
    age: 18,
    hobbies: ['none', 'none!'],
    role: [Roll.ADMIN, Roll[0]]
};
// person.role.push(22);
// person.role[0] = 22;
console.log(Roll);
