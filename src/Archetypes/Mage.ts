import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static MageCount = 0;
  private _type: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Mage.MageCount += 1;
    this._type = 'mana';
  }

  static createdArchetypeInstances():number {
    return Mage.MageCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Mage;