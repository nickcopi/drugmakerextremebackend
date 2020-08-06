import { Drug } from "./Drug";

export class PurchaseResult {
    private success: Boolean;
    private flavorText: string;
    private item: Drug;
    private costDiff: number;
    constructor(success: Boolean, flavorText: string, item: Drug, costDiff: number) {
        this.success = success;
        this.flavorText = flavorText;
        this.item = item;
        this.costDiff = costDiff;
    }
}