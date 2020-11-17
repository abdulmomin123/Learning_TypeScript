function renderPerson(tag: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    initialConstructor: T
  ) {
    return class extends initialConstructor {
      constructor(..._args: any[]) {
        super();
        const target = document.querySelector(selector)!;

        if (target) {
          target.innerHTML = `<${tag}> ${this.name} </${tag}>`;
        }
      }
    };
  };
}

@renderPerson('h1', 'div')
class Person {
  constructor(public name: string, public age: number) {
    //
  }
}

const me = new Person('Momin', 18);
