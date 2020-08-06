import { Item } from "./Item";
import { DrugType } from "./DrugType";
import { Drug } from "./Drug";
import { Wallet } from "./Wallet";
import { PurchaseResult } from "./PurchaseResult";

export class Dealer {
    private name: string;
    private item: Item;
    public constructor(name: string, item: Item) {
        this.name = name;
        this.item = item;
    }
    public assignChildren(): void {
        this.item = (<any>Object).assign(new Drug(null, null, null), this.item)
    }
    public purchase(wallet: Wallet): PurchaseResult {
        const costDiff: number = wallet.getMoney() - this.item.getStackCost();
        if (costDiff < 0)
            return new PurchaseResult(false, `Cannot afford ${this.item.getName()}. $${Math.abs(costDiff)} short!`, this.item, costDiff);
        wallet.removeMoney(this.item.getStackCost());
        return new PurchaseResult(true, `Purchased ${this.item.getName()} for $${this.item.getStackCost()}.`, this.item, costDiff);
    }
}