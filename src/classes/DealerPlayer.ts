import { AbstractPlayer } from "./AbstractPlayer";

export class DealerPlayer extends AbstractPlayer {
  /**
   * Dealer allways plays until the sum of his cards is atleast 17
   * Dealer allways deals himself one card in the beginning
   */

  requestCard(): boolean {
    if (this.calculateCards() < 17) return true;
    else {
      this.active = false;
      return false;
    }
  }
}
