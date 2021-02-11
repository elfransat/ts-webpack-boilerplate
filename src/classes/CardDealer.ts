import { AbstractPlayer } from "./AbstractPlayer";
import { Card } from "./Card";

export class CardDealer {
  /**
   * deck array presents one deck of cards. Ones and elevens are presented
   * by the same card so the array has 4 elements extra compared to
   * real life card deck.
   */

  private deck: number[] = [
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
  ];

  private cards: Card = new Card();
  private card: number = 0;
  private cardIndex: number = -1;

  /**
   * choose new card from the deck as long as the card value is zero.
   * when a card is found replace the index of it with zero to prevent
   * the occurrance of same card twice.
   * Ones and elevens are values of same card. If one is pulled from deck replace
   * also one eleven and vice versa.
   */

  dealTo(player: AbstractPlayer) {
    while (this.card == 0) {
      this.cardIndex = this.cards.getCardIndex(1, this.deck.length - 1);
      this.card = this.deck[this.cardIndex];
    }
    if (this.card == 1) {
      this.deck[this.deck.indexOf(11)] = 0;
    }
    if (this.card == 11) {
      this.deck[this.deck.indexOf(1)] = 0;
    }

    player.receiveCard(this.card);
    this.deck[this.cardIndex] = 0;
    this.card = 0;
  }
}
