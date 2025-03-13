export class PhraseView {
    constructor() {
        this.$ = document.querySelector.bind(document);
    }
    template(id, advice) {
        return `
      <div class="main-div-body" id="${id}">
        <p class="main__paragraph">"${advice}"</p>
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
    render(id, advice) {
        this.$.querySelector(".main").innerHTML = this.template(id, advice);
    }
}
