function propertyDecorator(target: any, prop: string | Symbol) {
  console.log(target, prop);
}

function accessorDecorator(
  target: any,
  prop: string | symbol,
  propDescriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(prop);
  console.log(propDescriptor);
}

function methodDecorator(
  target: any,
  prop: string | symbol,
  propDescriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(prop);
  console.log(propDescriptor);
}

class Product {
  // @propertyDecorator
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  // @accessorDecorator
  set price(val: number) {
    if (val > 0) this._price = val;
  }

  // @methodDecorator
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const prod = new Product('phone', 1000);
