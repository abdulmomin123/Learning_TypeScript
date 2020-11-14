var mixedArr = ['22', 'hi', 'hi'];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READER"] = 1] = "READER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'momin',
    age: 18,
    role: [Role.ADMIN]
};
console.log(person);
