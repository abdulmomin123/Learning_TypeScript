function renderPerson(template: string, selector: string) {
  return function (_constructor: Function) {
    const target = document.querySelector(selector)!;

    if (target) {
      target.innerHTML = template;
    }
  };
}

@renderPerson('<h1>Momin</h1>', 'div')
class Person {
  constructor(public name: string, public age: number) {
    //
  }
}
