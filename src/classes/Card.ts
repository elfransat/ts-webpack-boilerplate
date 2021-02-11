export class Card {
  private _deckSize: number = 0;

  consturctor(deckSize: number) {
    this._deckSize = deckSize;
  }

  /**
   * Pick a random number to be used as a index for picking a card
   * @param min min value for random number
   * @param max max value for random number
   */

  getCardIndex(min: number, max: number = this._deckSize): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
