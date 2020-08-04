import * as config from './config.json';
import { Drug } from './Drug';
import { DrugType } from './DrugType.js';
import { Save } from './Save.js';
export class Game {
	private save: Save;
	public constructor() {
		this.save = new Save();
		console.log(new Drug([1, 2, 1, 3, 1, 4, 1, 5], 1, 10, DrugType.DEPRESSANT).getYield());
		let newSave: Save = (<any>Object).assign(new Save,JSON.parse(JSON.stringify(this.save)));
		newSave.assignChildren();
		console.log(newSave);
		console.log(newSave.getWallet().getMoney())
	}
	


}
