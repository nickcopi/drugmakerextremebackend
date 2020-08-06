import { Game } from './Game'
import { Wallet } from './Wallet';
const game: Game = new Game();
console.log(game);
console.log(game.combineDrugs(game.getDrugs()[0],game.getDrugs()[0],2,2));
console.log(game.combineDrugs(game.getDrugs()[1],game.getDrugs()[1],1,2));