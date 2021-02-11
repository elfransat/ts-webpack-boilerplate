import { RealPlayer } from "./classes/RealPlayer";
import { BotPlayer } from "./classes/BotPlayer";
import { DealerPlayer } from "./classes/DealerPlayer";
import { CardDealer } from "./classes/CardDealer";

const players = [
  new BotPlayer(5, "bot1"),
  new BotPlayer(5, "bot2"),
  new RealPlayer(5, "player1"),
  new RealPlayer(5, "player2"),
];
const dealerPlayer = new DealerPlayer(5, "Dealer");

const dealer = new CardDealer();

while (checkActivePlayers()) {
  players.forEach((player) => {
    while (player.active) {
      if (player.active && player.requestCard()) {
        dealer.dealTo(player);
        console.log(player.playerName + " " + player.reviewCards());
      }
      player.checkPlayerStatus();
      break;
    }
  });

  if (dealerPlayer.holdings.length < 1) {
    dealer.dealTo(dealerPlayer);
    console.log(dealerPlayer.playerName + " " + dealerPlayer.reviewCards());
  }

  if (checkActivePlayers() == false) {
    while (dealerPlayer.active == true && dealerPlayer.requestCard()) {
      dealer.dealTo(dealerPlayer);
      console.log(dealerPlayer.playerName + " " + dealerPlayer.reviewCards());
    }
    checkWinners();
  }
}

/**
 * checkActivePlayers function checks if there are still players left in the game
 * This check doesn't consider dealer because dealer will allways draw last cards
 * after other players has declined their turn.
 */

function checkActivePlayers(): boolean {
  if (players.find((player) => player.active == true)) return true;
  else return false;
}

function checkWinners(): void {
  players.map((player) => {
    if (player.lost == true) console.log(`${player.playerName} lost.`);
    else if (player.win == true) console.log(`${player.playerName} won.`);
    else if (player.calculateCards > dealerPlayer.calculateCards)
      console.log(`${player.playerName} won.`);
    else console.log(`${player.playerName} lost.`);
  });
}
