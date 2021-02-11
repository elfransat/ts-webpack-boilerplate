import { AbstractPlayer } from "./AbstractPlayer";
import { CardSelectionService } from "./services/CardSelectionService";

export class BotPlayer extends AbstractPlayer {
  cardSelection = new CardSelectionService();

  requestCard(): boolean {
    if (this.holdings.length < 2) return true;
    if (this.cardSelection.decide()) return true;
    else {
      this.active = false;
      return false;
    }
  }
}
