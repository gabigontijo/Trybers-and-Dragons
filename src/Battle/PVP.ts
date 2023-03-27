import Battle from './Battle';
import Fighter from '../Fighter';
// import Character from '../Character';

export default class PVP extends Battle {
  private _player2: Fighter;
  private _player: Fighter;
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this._player2.lifePoints > 0) {
      if (this._player.strength > this._player2.strength) {
        this._player.attack(this._player2);
        this._player2.attack(this._player);
      }
      this._player2.attack(this._player);
      this._player.attack(this._player2);
    }
    return super.fight();
  }
}