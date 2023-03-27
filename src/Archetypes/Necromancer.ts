import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static necromancerCount = 0;
  private _type: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.necromancerCount += 1;
    this._type = 'mana';
  }

  static createdArchetypeInstances():number {
    return Necromancer.necromancerCount;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Necromancer;