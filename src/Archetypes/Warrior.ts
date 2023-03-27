import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static warriorCount = 0;
  private _type: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Warrior.warriorCount += 1;
    this._type = 'stamina';
  }

  static createdArchetypeInstances():number {
    return Warrior.warriorCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Warrior;