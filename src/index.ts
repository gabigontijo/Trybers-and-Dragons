import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(arr: Battle[]) {
  arr.forEach((b: Battle) => {
    b.fight();
  });
}

// console.log('monster 1', monster1, monster2, pvp, pve);
// console.log('monster 2', monster2);
// console.log('player 1', player1);
// console.log('player 2', player2);
// console.log('player 3', player3);
// console.log('pvp', pvp);
// console.log('pve', pve);
// runBattles([pve, pvp]);

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
