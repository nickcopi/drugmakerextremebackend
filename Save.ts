import { Drug } from "./Drug";
import { Dealer } from "./Dealer";
import { Client } from "./Client";
import { Wallet } from "./Wallet";

export class Save {
    private drugs: Drug[];
    private dealers: Dealer[];
    private clients: Client[];
    private level: number;
    private wallet: Wallet;
    public constructor() {
        this.level = 1;
        this.wallet = new Wallet();
        this.drugs = [];
        this.clients = [];
        this.dealers = [];
    }
    public getWallet(): Wallet {
        return this.wallet;
    }
    public assignChildren(): void {
        this.wallet = (<any>Object).assign(new Wallet, this.wallet);
        this.drugs.map(obj => {
            const drug: Drug = (<any>Object).assign(new Drug(null, null, null, null), obj);
            drug.assignChildren();
        });
        this.dealers.map(obj => {
            const dealer: Dealer = (<any>Object).assign(new Dealer(null, null), obj);
            dealer.assignChildren();
        });
        this.clients.map(obj => {
            const client: Client = (<any>Object).assign(new Client, obj);
            client.assignChildren();
        });

    }
}