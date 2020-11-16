"use strict";
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const info = merge({ name: 'momin' }, { age: 18 });
console.log(info);
//# sourceMappingURL=app.js.map