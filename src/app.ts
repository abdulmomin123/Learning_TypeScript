function foo(_: Function) {
  console.log('foo');
}

function bar(_: Function) {
  console.log('bar');
}

@foo
@bar
class Person {
  constructor(public name: string) {
    console.log('person created');
  }
}

const me = new Person('momin');

console.log(me);
