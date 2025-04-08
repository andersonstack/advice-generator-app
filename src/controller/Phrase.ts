import { phraseInterface } from "../interface/phrase-interface.js";
import { PhraseView } from "../view/Phrase-view.js";

export class Phrase {
  private id: number;
  private advice: string;
  private static phrase: ReadonlyArray<phraseInterface> = [];

  public static async getPhrase(): Promise<ReadonlyArray<phraseInterface>> {
    try {
      const response = await fetch("../../assets/phrases.json");
      const frases: { id: number; frase: string }[] = await response.json();

      const idPhrase = Math.floor(Math.random() * 101);

      const phraseData: phraseInterface = {
        id: frases[idPhrase].id,
        advice: frases[idPhrase].frase,
      };

      this.phrase = [phraseData];

      const phraseView = new PhraseView();
      phraseView.render(this.phrase[0].id, this.phrase[0].advice);

      return this.phrase;
    } catch (error) {
      console.log(`Error getting phrase from JSON: ${error}`);
      return [];
    }
  }
}
