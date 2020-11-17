class Product {
  constructor(public title: string, private _price: number) {
    //
  }

  set price(val: number) {
    if (val > 0) this._price = val;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
