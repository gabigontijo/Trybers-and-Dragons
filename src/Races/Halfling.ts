import Race from './Race';

class Halfling extends Race {
  static halflingCount = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingCount += 1;
  }

  static createdRacesInstances():number {
    return Halfling.halflingCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;