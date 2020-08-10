import { DrugFilter } from "./DrugFilter";
import { SellResult } from "./SellResult";
import { Drug } from "./Drug";
import { Wallet } from "./Wallet";
import { DrugController } from "./DrugController";
import * as config from './config.json';

export class Client {
    private drugFilter: DrugFilter;
    private name: string;

    public constructor(level: number, name: string = Client.randomName()) {
        this.drugFilter = new DrugFilter(level);
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return `Looking to buy ` + this.drugFilter.getDescription();
    }
    public sellDrug(drug: Drug, wallet: Wallet, drugController: DrugController, quantity: number): SellResult {
        if (!this.drugFilter.matchesFilter(drug)) {
            return new SellResult(false, `The client is not looking for this kind of drug.`);
        }
        quantity *= this.drugFilter.getQuantityMultiplier();
        if (quantity > drug.getGrams())
            return new SellResult(false, `You do not have enough of that drug to make that deal.`);
        const profit: number = Math.ceil(drug.getCost() * quantity * this.drugFilter.getPriceMultiplier());
        wallet.addMoney(profit);
        drugController.removeDrug(drug, quantity);
        return new SellResult(true, `Sold ${quantity} g of ${drug.getName()} for $${profit}.`);
    }
    public getDrugFilter(): DrugFilter {
        return this.drugFilter;
    }
    public assignChildren(): void {
        this.drugFilter = Object.assign(new DrugFilter(null), this.drugFilter);
        this.drugFilter.assignChildren();
    }
    public static randomName(): string {
        return config.titles[Math.floor(Math.random() * config.titles.length)] + ' ' +
            config.names[Math.floor(Math.random() * config.names.length)];
    }
}