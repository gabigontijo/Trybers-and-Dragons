import Race from './Race';

class Elf extends Race {
  static elfCount = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfCount += 1;
  }

  static createdRacesInstances():number {
    return Elf.elfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;