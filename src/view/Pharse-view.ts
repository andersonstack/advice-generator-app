export class PhraseView {
  private id: number;
  private advice: string;
  private $: Document = document.querySelector.bind(document);

  constructor(id: number, advice: string) {
    this.id = id;
    this.advice = advice;
  }

  private template() {
    return `
      <div class="main-div-body">
        <p class="main__paragraph">"${this.advice}"</p>
        <div class="main__div">
          <hr class="line" />
          <button class="main__button" id="main__button">
            <img class="main__button-icon" src="./assets/icons/icon.png" />
          </button>
          <hr class="line" />
        </div>
      </div>
    `;
  }

  public render() {
    this.$.querySelector(".main").innerHTML = this.template();
  }
}
