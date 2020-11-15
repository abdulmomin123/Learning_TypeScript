"use strict";
function printEmp(emp) {
    if ('permissions' in emp) {
        console.log(emp.permissions);
    }
}
printEmp({ name: 'momin', permissions: ['admin'] });
//# sourceMappingURL=app.js.map