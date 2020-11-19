"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const modifiedMethod = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        },
    };
    return modifiedMethod;
}
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min && typeof validatableInput.min === 'number') {
        isValid = isValid && validatableInput.min >= validatableInput.value;
    }
    if (validatableInput.max && typeof validatableInput.max === 'number') {
        isValid = isValid && validatableInput.max <= validatableInput.value;
    }
    return isValid;
}
class ProjectInput {
    constructor() {
        this.template = document.getElementById('project-input');
        this.host = document.getElementById('app');
        const importedNode = document.importNode(this.template.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInput = this.element.querySelector('#title');
        this.descriptionInput = this.element.querySelector('#description');
        this.peopleInput = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.host.insertAdjacentElement('afterbegin', this.element);
    }
    getUserInputs() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const people = +this.peopleInput.value;
        return [title, description, people];
    }
    clearInputs() {
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.peopleInput.value = '';
    }
    submitHandler(e) {
        e.preventDefault();
        const userInputs = this.getUserInputs();
        this.clearInputs();
        console.log(userInputs);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const form = new ProjectInput();
//# sourceMappingURL=app.js.map