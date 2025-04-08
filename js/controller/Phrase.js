var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PhraseView } from "../view/Phrase-view.js";
export class Phrase {
    static getPhrase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("../../assets/phrases.json");
                const frases = yield response.json();
                const idPhrase = Math.floor(Math.random() * 101);
                const phraseData = {
                    id: frases[idPhrase].id,
                    advice: frases[idPhrase].frase,
                };
                this.phrase = [phraseData];
                const phraseView = new PhraseView();
                phraseView.render(this.phrase[0].id, this.phrase[0].advice);
                return this.phrase;
            }
            catch (error) {
                console.log(`Error getting phrase from JSON: ${error}`);
                return [];
            }
        });
    }
}
Phrase.phrase = [];
