export class PhraseView {
    constructor() {
        this.$ = document.querySelector.bind(document);
    }
    template(id, advice) {
        return `
        <p class="main__paragraph main__paragraph-animation" id="${id}">"${advice}"</p>
    `;
    }
    render(id, advice) {
        this.$(".main__paragraph").innerHTML = this.template(id, advice);
    }
}
