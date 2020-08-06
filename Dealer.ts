import { Item } from "./Item";
import { DrugType } from "./DrugType";
import { Drug } from "./Drug";

export class Dealer {
    private name: string;
    private item: Item;
    public constructor(name: string, item: Item) {
        this.name = name;
        this.item = item;
    }
    public assignChildren(): void {
        this.item = (<any>Object).assign(new Drug(null,null,null),this.item)
    }
}