"use strict";
const names = ['momin'];
const timer = new Promise(resolve => {
    setTimeout(() => {
        resolve('hi');
    }, 2000);
});
timer.then(data => console.log(data));
//# sourceMappingURL=app.js.map