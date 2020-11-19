// autobind decorator
function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  const modifiedMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };

  return modifiedMethod;
}

// main class
class ProjectInput {
  template: HTMLTemplateElement;
  host: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.template = document.getElementById(
      'project-input'
    ) as HTMLTemplateElement;
    this.host = document.getElementById('app') as HTMLDivElement;

    const importedNode = document.importNode(this.template.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInput = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInput = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInput = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.host.insertAdjacentElement('afterbegin', this.element);
  }

  private getUserInputs(): [string, string, number] {
    const title = this.titleInput.value;
    const description = this.descriptionInput.value;
    const people = +this.peopleInput.value;

    return [title, description, people];
  }

  @autobind
  private submitHandler(e: Event) {
    e.preventDefault();

    const userInputs = this.getUserInputs();

    console.log(userInputs);
  }
}

const form = new ProjectInput();
