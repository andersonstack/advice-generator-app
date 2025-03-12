import { Phrase } from "./controller/Phrase.js";

const btn = document.querySelector("#main__button") as HTMLButtonElement;

btn.addEventListener("click", async () => {
  const phrase = await Phrase.getPhrase();
});
