"use strict";
function merge(...allObj) {
    return Object.assign({}, allObj);
}
const info = merge({ name: 'momin' }, { age: 18 });
console.log(info);
//# sourceMappingURL=app.js.map