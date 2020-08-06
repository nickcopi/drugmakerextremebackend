import { Item } from "./Item";
import { DrugType } from "./DrugType";
import { Drug } from "./Drug";
import { Wallet } from "./Wallet";
import { PurchaseResult } from "./PurchaseResult";
import { DrugController } from "./DrugController";

export class Dealer {
    private name: string;
    private item: Drug;
    public constructor(name: string, item: Drug) {
        this.name = name;
        this.item = item;
    }
    public assignChildren(): void {
        this.item = (<any>Object).assign(new Drug(null, null, null), this.item)
    }
    public purchase(quantity: number, wallet: Wallet, drugController: DrugController): PurchaseResult {
        const costDiff: number = wallet.getMoney() - this.item.getStackCost() * quantity;
        if (quantity <= 0 || quantity !== Math.round(quantity))
            return new PurchaseResult(false, `Cannot purchase ${quantity} g of ${this.item.getName()}. Invalid quantity!`, this.item, costDiff);
        if (costDiff < 0)
            return new PurchaseResult(false, `Cannot afford ${quantity} g of ${this.item.getName()}. $${Math.abs(costDiff)} short!`, this.item, costDiff);
        wallet.removeMoney(this.item.getStackCost() * quantity);
        const boughtDrug = (<any>Object).assign(new Drug(null, null, null), this.item);
        boughtDrug.assignChildren();
        boughtDrug.quantity = quantity;
        drugController.addDrug(boughtDrug);
        return new PurchaseResult(true, `Purchased ${quantity} g of ${this.item.getName()} for $${this.item.getStackCost() * quantity}.`, this.item, costDiff);
    }
}