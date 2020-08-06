import { Game } from './Game'
import { Wallet } from './Wallet';
const game: Game = new Game();
console.log(game.getDrugs()[0].getGrams());
console.log(game.sellToClient(game.getDrugs()[0], game.getClients()[0], 10));
console.log(game.getDrugs());
console.log(game);