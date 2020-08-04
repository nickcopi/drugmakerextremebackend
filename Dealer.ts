import { Item } from "./Item";

export class Dealer {
    private name: string;
    private item: Item;
    public constructor(name: string, item: Item) {
        this.name = name;
        this.item = item;
    }
}