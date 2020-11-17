function render(template: string, hookId: string) {
  return function (constructor: Function) {
    const target = document.querySelector(hookId)!;
    target.innerHTML = template;
    constructor;
  };
}

@render('<p>hi</p>', 'div')
class Person {
  constructor(public name: string) {
    console.log('person created');
  }
}

const me = new Person('momin');

console.log(me);
