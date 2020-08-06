import { Game } from './Game'
import { Wallet } from './Wallet';
const game: Game = new Game();
console.log(game.getClients());
console.log(game.getClients().map(client=>client.getDescription()));
console.log(game.sellToClient(game.getDrugs()[0], game.getClients()[2], 9));
console.log(game.getDrugs());
console.log(game);