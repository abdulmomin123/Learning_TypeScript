"use strict";
function Log(prop) {
    console.log(prop);
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
//# sourceMappingURL=app.js.map