"use strict";
function propertyDecorator(target, prop) {
    console.log(target, prop);
}
function accessorDecorator(target, prop, propDescriptor) {
    console.log(target);
    console.log(prop);
    console.log(propDescriptor);
}
function methodDecorator(target, prop, propDescriptor) {
    console.log(target);
    console.log(prop);
    console.log(propDescriptor);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
const prod = new Product('phone', 1000);
//# sourceMappingURL=app.js.map