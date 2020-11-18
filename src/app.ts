const btn = document.querySelector('button')!;

function autoBind(
  this: any,
  _target: any,
  _method: string,
  descriptor: PropertyDescriptor
) {
  const initialDes = descriptor.value;
  const newDes: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return initialDes.bind(this);
    },
  };

  return newDes;
}

class Printer {
  message = 'this works';

  constructor() {
    //
  }

  @autoBind
  showMessage() {
    console.log(this.message);
  }
}

const test = new Printer();

btn.addEventListener('click', test.showMessage);

test.showMessage();
