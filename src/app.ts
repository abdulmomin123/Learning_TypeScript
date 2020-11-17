function Logger(state: 'original' | 'extended') {
  if (state === 'original') {
    return function (target: Function) {
      console.log(target);
    };
  } else {
    return function (target: Function) {
      console.log(`target fn here: ${target}`);
    };
  }
}

@Logger('extended')
class Person {
  constructor(public name: string) {
    console.log('person created');
  }
}

const me = new Person('momin');

console.log(me);
