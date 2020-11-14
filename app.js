var mixedArr = ['22', 'hi', 'hi'];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READER"] = 0] = "READER";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'momin',
    age: 18,
    role: [Role.ADMIN]
};
console.log(Role);
