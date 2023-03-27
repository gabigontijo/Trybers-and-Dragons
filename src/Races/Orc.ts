import Race from './Race';

class Orc extends Race {
  static orcCount = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcCount += 1;
  }

  static createdRacesInstances():number {
    return Orc.orcCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;