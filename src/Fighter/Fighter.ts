import Energy from '../Energy';
import SimpleFihter from './SimpleFighter';

export default interface Fighter extends SimpleFihter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter):void;
  levelUp():void;
}