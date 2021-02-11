export interface PlayerBehavior {
  requestCard: () => boolean;

  receiveCard: (card: number) => void;

  reviewCards: () => number[];

  checkPlayerStatus: () => void;

  calculateCards: () => number;
}
