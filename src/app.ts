function Log(prop: string) {
  console.log(prop);
}

class Product {
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  set price(val: number) {
    if (val > 0) this._price = val;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
