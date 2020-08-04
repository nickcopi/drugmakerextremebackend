import * as config from './config.json';
import { Drug } from './Drug';
import { DrugType } from './DrugType.js';
export class Game {
	public constructor() {
		console.log(new Drug([1, 2, 1, 3, 1, 4, 1, 5], 1, 10,DrugType.DEPRESSANT).getName());
	}


}
