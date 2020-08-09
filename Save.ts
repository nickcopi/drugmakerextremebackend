import { Drug } from "./Drug";
import { Dealer } from "./Dealer";
import { Client } from "./Client";
import { Wallet } from "./Wallet";
import * as config from './config.json';
import { Constants } from "./Constants";
import { DrugController } from "./DrugController";
import { CombineResult } from "./CombineResult";
import { UpgradeState } from "./UpgradeState";

export class Save {
    private dealers: Dealer[];
    private clients: Client[];
    private upgradeStates: UpgradeState[];
    private level: number;
    private wallet: Wallet;
    private drugController: DrugController;
    public constructor() {
        this.level = 1;
        this.wallet = new Wallet();
        this.clients = Constants.defaultClients();
        this.dealers = Constants.defaultDealers();
        this.upgradeStates = [
            new UpgradeState(),
            new UpgradeState(),
            new UpgradeState()
        ];
        this.drugController = new DrugController();
    }
    public combineDrugs(drug1: Drug, drug2: Drug, quantity1: number, quantity2: number): CombineResult {
        return this.drugController.combineDrugs(drug1, drug2, quantity1, quantity2)
    }
    public getDrugController(): DrugController {
        return this.drugController;
    }
    public getDrugs(): Drug[] {
        return this.drugController.getDrugs();
    }
    public getDealers(): Dealer[] {
        return this.dealers;
    }
    public getClients(): Client[] {
        return this.clients;
    }
    public getWallet(): Wallet {
        return this.wallet;
    }
    public getUpgradeStates(): UpgradeState[] {
        return this.upgradeStates;
    }
    public assignChildren(): void {
        this.drugController = Object.assign(new DrugController, this.drugController);
        this.drugController.assignChildren();
        this.wallet = Object.assign(new Wallet, this.wallet);
        this.dealers = this.dealers.map(obj => {
            const dealer: Dealer = Object.assign(new Dealer(null, null), obj);
            dealer.assignChildren();
            return dealer;
        });
        this.clients = this.clients.map(obj => {
            const client: Client = Object.assign(new Client(null), obj);
            client.assignChildren();
            return client;
        });
        this.upgradeStates = this.upgradeStates.map(obj => {
            const upgradeState: UpgradeState = Object.assign(new UpgradeState, obj);
            return upgradeState;
        });

    }
}