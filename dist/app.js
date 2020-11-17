"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function foo(_) {
    console.log('foo');
}
function bar(_) {
    console.log('bar');
}
let Person = class Person {
    constructor(name) {
        this.name = name;
        console.log('person created');
    }
};
Person = __decorate([
    foo,
    bar
], Person);
const me = new Person('momin');
console.log(me);
//# sourceMappingURL=app.js.map