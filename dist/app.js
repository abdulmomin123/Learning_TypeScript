"use strict";
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
    submitHandler(e) {
        e.preventDefault();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.host.insertAdjacentElement('afterbegin', this.element);
    }
}
const form = new ProjectInput();
//# sourceMappingURL=app.js.map