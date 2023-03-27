import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static rangerCount = 0;
  private _type: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Ranger.rangerCount += 1;
    this._type = 'stamina';
  }

  static createdArchetypeInstances():number {
    return Ranger.rangerCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Ranger;