"use strict";
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    return n1.toString() + n2.toString();
}
const num = add(2, 2);
const str = add('2', '2');
console.log(num, str);
//# sourceMappingURL=app.js.map