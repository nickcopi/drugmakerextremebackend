import { Item } from "./Item";

export class PurchaseResult {
    private success: Boolean;
    private flavorText: string;
    private item: Item;
    private costDiff: number;
    constructor(success: Boolean, flavorText: string, item: Item, costDiff: number) {
        this.success = success;
        this.flavorText = flavorText;
        this.item = item;
        this.costDiff = costDiff;
    }
}