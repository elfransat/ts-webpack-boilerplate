import { PlayerBehavior } from "../interfaces/PlayerBehavior";

export abstract class AbstractPlayer implements PlayerBehavior {
  private _holdings: number[] = [];
  private _max: number;
  private _playerName: string;
  private _active: boolean;
  private _win: boolean;
  private _lost: boolean;

  abstract requestCard(): boolean;

  constructor(
    max: number,
    playerName: string,
    active: boolean = true,
    win: boolean = false,
    lost: boolean = false
  ) {
    this._max = max;
    this._playerName = playerName;
    this._active = active;
    this._win = win;
    this._lost = lost;
  }

  calculateCards(): number {
    if (this._holdings.length > 0) {
      return this._holdings.reduce((a, b) => a + b);
    } else return 0;
  }

  checkPlayerStatus(): void {
    if (this.calculateCards() > 21) {
      this._active = false;
      this._lost = true;
      console.log(`${this._playerName} lost already :<`);
    } else if (this.calculateCards() == 21) {
      this._active = false;
      this._win = true;
      console.log(`${this._playerName} Black Jack.`);
    }
  }

  receiveCard(card: number | undefined) {
    if (this._holdings.length < this._max && card !== undefined) {
      this._holdings.push(card);
    }
  }

  reviewCards(): number[] {
    return this._holdings;
  }

  get playerName(): string {
    return this._playerName;
  }

  get active(): boolean {
    return this._active;
  }

  set active(active: boolean) {
    if (typeof active == "boolean") {
      this._active = active;
    }
  }

  get win(): boolean {
    return this._win;
  }

  get lost(): boolean {
    return this._lost;
  }

  get holdings(): number[] {
    return this._holdings;
  }
}
