import * as config from './config.json';
import { Drug } from './Drug';
import { DrugType } from './DrugType.js';
import { Save } from './Save.js';
import { Dealer } from './Dealer.js';
import { PurchaseResult } from './PurchaseResult.js';
import { Client } from './Client.js';
export class Game {
	private save: Save;
	public constructor() {
		this.save = new Save();
		//console.log(new Drug([1, 2, 1, 3, 1, 4, 1, 5], 1, 10).getYield());
		//let newSave: Save = (<any>Object).assign(new Save, JSON.parse(JSON.stringify(this.save)));
		//newSave.assignChildren();
		//console.log(newSave.getClients());
		//console.log(newSave.getClients()[0].getDrugFilter().getFilterType());
		//console.log(newSave.getWallet().getMoney())
		//console.log(newSave.getDrugs());
	}
	public getDrugs(): Drug[] {
		return this.save.getDrugs();
	}
	public getDealers(): Dealer[] {
		return this.save.getDealers();
	}
	public getClients(): Client[] {
		return this.save.getClients();
	}
	public buyFromDealer(dealer: Dealer, quantity: number = 1): PurchaseResult {
		return dealer.purchase(quantity, this.save.getWallet(), this.save.getDrugController());
	}
	public sellToClient(drug: Drug, client: Client, quantity: number = 1) {
		return client.sellDrug(drug, this.save.getWallet(), this.save.getDrugController(), quantity);
	}



}
