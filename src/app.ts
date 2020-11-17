function Logger(target: Function) {
  console.log(target);
}

@Logger
class Person {
  constructor(public name: string) {
    console.log('person created');
  }
}

const me = new Person('momin');

console.log(me);
