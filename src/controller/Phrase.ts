import { phraseInterface } from "../interface/phrase-interface.js";
import { PhraseView } from "../view/Phrase-view.js";

export class Phrase {
  private id: number;
  private advice: string;
  private static phrase: ReadonlyArray<phraseInterface> = [];

  public static async getPhrase(): Promise<ReadonlyArray<phraseInterface>> {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      const phraseData: phraseInterface = {
        id: data.slip.id,
        advice: data.slip.advice,
      };

      this.phrase = [phraseData];

      const phraseView = new PhraseView();
      phraseView.render(this.phrase[0].id, this.phrase[0].advice);

      return this.phrase;
    } catch (error) {
      console.log(`Error getting phrase from API: ${error}`);
      return [];
    }
  }
}
