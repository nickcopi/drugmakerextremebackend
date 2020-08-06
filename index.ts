import { Game } from './Game'
import { Wallet } from './Wallet';
const game: Game = new Game();
console.log(game.buyFromDealer(game.getDealers()[0]));
console.log(game.getDrugs());