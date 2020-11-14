function add(n1, n2, outputAs) {
    var result;
    if (outputAs === 'asNumber') {
        result = +n1 + +n2;
    }
    else {
        result = n1 + n2;
    }
    return result;
}
var r1 = add(2, 2, 'asNumber');
var r2 = add(2, 2, 'asString');
console.log(r1, r2);
