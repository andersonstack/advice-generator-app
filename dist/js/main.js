import { Phrase } from "./controller/Phrase.js";
const btn = document.querySelector("#main__button");
btn.addEventListener("click", () => {
    const phrase = Phrase.getPhrase();
    console.log(phrase);
    console.log("Teste");
});
