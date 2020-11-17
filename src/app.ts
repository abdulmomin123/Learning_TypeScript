function renderPerson(tag: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    initialConstructor: T
  ) {
    return class extends initialConstructor {
      constructor(...args: any[]) {
        super();
        const target = document.querySelector(selector)!;

        console.log(args);
        if (target) {
          target.innerHTML = `<${tag}> ${this.name} </${tag}>`;
        }
      }
    };
  };
}

@renderPerson('h1', 'div')
class Person {
  name: string = 'momin';

  constructor() {}
}

const me = new Person();

console.log(me);
