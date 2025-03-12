import { phraseInterface } from "../interface/phrase-interface.js";

export class Phrase {
  private id: number;
  private advice: string;
  private static phrase: ReadonlyArray<phraseInterface> = [];

  public static async getPhrase(): Promise<ReadonlyArray<phraseInterface>> {
    try {
      const responde = await fetch("https://api.adviceslip.com/advice");
      const data = await responde.json();

      const phraseData: phraseInterface = {
        id: data.slip.id,
        advice: data.slip.advice,
      };

      this.phrase = [phraseData];

      return this.phrase;
    } catch (error) {
      console.log(`Error getting phrase from API: ${error}`);
      return [];
    }
  }
}
