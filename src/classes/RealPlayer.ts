import { AbstractPlayer } from "./AbstractPlayer";

export class RealPlayer extends AbstractPlayer {
  requestCard(): boolean {
    if (this.holdings.length < 2) return true;
    else if (confirm(`${this.playerName} do you want to pick more cards?`))
      return true;
    else {
      this.active = false;
      return false;
    }
  }
}
