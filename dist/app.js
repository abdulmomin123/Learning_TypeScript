"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const btn = document.querySelector('button');
function autoBind(_target, _method, descriptor) {
    const initialDes = descriptor.value;
    const newDes = {
        configurable: true,
        enumerable: false,
        get() {
            return initialDes.bind(this);
        },
    };
    return newDes;
}
class Printer {
    constructor() {
        this.message = 'this works';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    autoBind
], Printer.prototype, "showMessage", null);
const test = new Printer();
btn.addEventListener('click', test.showMessage);
//# sourceMappingURL=app.js.map