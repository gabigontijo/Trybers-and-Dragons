import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export type ArrayMonster = (Monster | Fighter | SimpleFighter)[];

export default class PVE extends Battle {
  private _characterFigther: Fighter;
  private _monster : ArrayMonster;

  constructor(characterFigther: Fighter, monster: ArrayMonster) {
    super(characterFigther);
    this._characterFigther = characterFigther;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((m) => {
      while (this._characterFigther.lifePoints
        > 0 && m.lifePoints > 0) {
        this.whoAttack(m);
      }
    });
    return super.fight();
  }

  whoAttack(m: Monster | Fighter | SimpleFighter):void {
    if (this._characterFigther.lifePoints > 0) {
      this._characterFigther.attack(m);
    }
    if (m.lifePoints > 0) {
      m.attack(this._characterFigther);
    }
  }
}