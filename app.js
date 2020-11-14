"use strict";
function greet(name, callback) {
    var userName = name;
    callback(userName);
}
greet('momin', function (name) {
    console.log('helloo' + name);
});
