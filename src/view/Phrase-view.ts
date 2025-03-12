export class PhraseView {
  private $ = document.querySelector.bind(document);

  constructor() {}

  private template(id: number, advice: string) {
    return `
        <p class="main__paragraph" id="${id}">"${advice}"</p>
    `;
  }

  public render(id: number, advice: string) {
    this.$(".main__paragraph")!.innerHTML = this.template(id, advice);
  }
}
