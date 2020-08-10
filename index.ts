import { Game } from './Game'
import { Wallet } from './Wallet';
const game: Game = new Game();
const drugs = game.getDrugs();
console.log(game.combineDrugs(drugs[0],drugs[0],1,1));
console.log(game.sellToClient(game.getClients()[0],game.getDrugs()[0],1);
//console.log(game.buyUpgrade(game.getUpgrades()[0]));
export default Game;