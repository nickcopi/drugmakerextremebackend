import { Drug } from "./Drug";
import { Dealer } from "./Dealer";
import { Client } from "./Client";
import { Wallet } from "./Wallet";
import * as config from './config.json';
import { Constants } from "./Constants";

export class Save {
    private drugs: Drug[];
    private dealers: Dealer[];
    private clients: Client[];
    private level: number;
    private wallet: Wallet;
    public constructor() {
        this.level = 1;
        this.wallet = new Wallet();
        this.clients = [];
        this.dealers = Constants.defaultDealers();
        this.drugs = [new Drug(config.stockDrugs.MARIJUANA,1,10)];
    }
    public getDrugs(): Drug[]{
        return this.drugs;
    }
    public getDealers(): Dealer[]{
        return this.dealers;
    }
    public getWallet(): Wallet {
        return this.wallet;
    }
    public assignChildren(): void {
        this.wallet = (<any>Object).assign(new Wallet, this.wallet);
        this.drugs = this.drugs.map(obj => {
            const drug: Drug = (<any>Object).assign(new Drug(null, null, null), obj);
            drug.assignChildren();
            return drug;
        });
        this.dealers = this.dealers.map(obj => {
            const dealer: Dealer = (<any>Object).assign(new Dealer(null, null), obj);
            dealer.assignChildren();
            return dealer;
        });
        this.clients = this.clients.map(obj => {
            const client: Client = (<any>Object).assign(new Client, obj);
            client.assignChildren();
            return client;
        });

    }
}