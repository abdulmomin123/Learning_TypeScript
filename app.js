// Function return types & void
var add = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
var r1 = add(2, 2, function (result) {
    console.log(result);
});
// console.log(r1);
