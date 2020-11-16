"use strict";
function countAndDescribe(element) {
    let description = 'Got no value';
    if (element.length) {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}
const str = countAndDescribe('hi');
console.log(str);
//# sourceMappingURL=app.js.map