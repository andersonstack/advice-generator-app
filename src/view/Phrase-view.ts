export class PhraseView {
  private $ = document.querySelector.bind(document);

  constructor() {}

  private template(id: number, advice: string) {
    return `
        <p class="main__paragraph main__paragraph-animation" id="${id}">"${advice}"</p>
    `;
  }

  public render(id: number, advice: string) {
    const oldParagraph: HTMLParagraphElement = this.$(".main__paragraph");
    setTimeout(() => {
      oldParagraph.classList.add("main__paragraph-remove");
    }, 1000);
    this.$(".main__paragraph")!.innerHTML = this.template(id, advice);
  }
}
