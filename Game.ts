import * as config from './config.json';
import { Drug } from './Drug';
import { Save } from './Save.js';
import { Dealer } from './Dealer.js';
import { PurchaseResult } from './PurchaseResult.js';
import { Client } from './Client.js';
import { CombineResult } from './CombineResult.js';
import { Upgrade } from './Upgrade.js';
import { LevelUpgrade } from './LevelUpgrade.js';
import { UpgradeResult } from './UpgradeResult.js';
import { Constants } from './Constants.js';
import { AdvertisingUpgrade } from './AdvertisingUpgrade.js';
import { YieldUpgrade } from './YieldUpgrade.js';
import { SellResult } from './SellResult.js';
export class Game {
	private save: Save;
	private upgrades: Upgrade[];
	private yieldUpgrade: YieldUpgrade;
	public constructor(save?: string) {
		if (!save) this.save = new Save();
		else {
			this.save = JSON.parse(save);
			this.save = Object.assign(new Save, this.save);
			this.save.assignChildren();
		}
		//console.log(new Drug([1, 2, 1, 3, 1, 4, 1, 5], 1, 10).getYield());
		//let newSave: Save = (<any>Object).assign(new Save, JSON.parse(JSON.stringify(this.save)));
		//newSave.assignChildren();
		//this.save = newSave;
		//console.log(newSave.getClients());
		//console.log(newSave.getClients()[0].getDrugFilter().getFilterType());
		//console.log(newSave.getWallet().getMoney())
		//console.log(newSave.getDrugs());

		this.upgrades = [
			new LevelUpgrade(this.levelUp.bind(this)),
			new AdvertisingUpgrade(this.advertise.bind(this)),
			new YieldUpgrade(() => { })
		];
		this.yieldUpgrade = <YieldUpgrade>this.upgrades[2];
		this.upgrades.forEach((upgrade: Upgrade, i: number) => {
			upgrade.setState(this.save.getUpgradeStates()[i]);
		});
	}
	public getDrugs(): Drug[] {
		return this.save.getDrugs();
	}
	public getLevel(): number {
		return this.save.getLevel();
	}
	public combineDrugs(drug1: Drug, drug2: Drug, quantity1: number, quantity2: number): CombineResult {
		return this.save.combineDrugs(drug1, drug2, quantity1, quantity2, this.yieldUpgrade.getBonus());
	}
	public getDealers(): Dealer[] {
		return this.save.getDealers();
	}
	public getClients(): Client[] {
		return this.save.getClients();
	}
	public getUpgrades(): Upgrade[] {
		return this.upgrades;
	}
	private levelUp(): void {
		this.save.incrementLevel();
		const nextDealer: Dealer = Constants.defaultDealers()[this.save.getLevel()];
		if (nextDealer) this.save.addDealer(nextDealer);
		this.save.addClient(new Client(this.save.getLevel()));
	}
	private advertise(): void {
		for (let i: number = 0; i < 3; i++) {
			this.save.addClient(new Client(this.save.getLevel()));
		}
	}
	public buyFromDealer(dealer: Dealer, quantity: number = 1): PurchaseResult {
		return dealer.purchase(quantity, this.save.getWallet(), this.save.getDrugController());
	}
	public sellToClient(drug: Drug, client: Client, quantity: number = 1): SellResult {
		return client.sellDrug(drug, this.save.getWallet(), this.save.getDrugController(), quantity);
	}
	public buyUpgrade(upgrade: Upgrade): UpgradeResult {
		return upgrade.buy(this.save.getWallet());
	}
	public getMoney(): number {
		return this.save.getWallet().getMoney();
	}
	public getSerializedSave(): string {
		return JSON.stringify(this.save);
	}



}
