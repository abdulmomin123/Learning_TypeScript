class ProjectInput {
  template: HTMLTemplateElement;
  host: HTMLDivElement;

  constructor() {
    this.template = document.getElementById(
      'project-input'
    ) as HTMLTemplateElement;
    this.host = document.getElementById('app') as HTMLDivElement;
  }
}
