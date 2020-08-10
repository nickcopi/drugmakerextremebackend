import { Dealer } from "./Dealer";
import { Drug } from "./Drug";
import * as config from './config.json';
import { Client } from "./Client";
import { DrugFilterType } from "./DrugFilterType";
import { Upgrade } from "./Upgrade";

export class Constants {
    public static Dealers: Dealer[];
    public static Clients: Client[];
    public static Upgrades: Upgrade[];
    public static defaultUpgrades(): Upgrade[]{
        if(this.Upgrades) return this.Upgrades;
        this.Upgrades = [
            //new Upgrade()
        ];
    }
    public static defaultDealers(): Dealer[] {
        if (this.Dealers) return this.Dealers;
        this.Dealers = (<any>Object).values(config.stockDrugs).map(
            (drug, index) => new Dealer(config.stockDealers[index], new Drug(drug, index + 1, 1))
        );
        return this.Dealers;
    }
    public static defaultClients(): Client[] {
        if (this.Clients) return this.Clients;
        this.Clients = [];
        this.Clients.push(new Client(1, 'Stoner Steve'));
        this.Clients[0].getDrugFilter().setDrug(new Drug([1, 2], 1, 1));
        this.Clients[0].getDrugFilter().setFilterType(DrugFilterType.DATA_MATCH);
        this.Clients.push(new Client(1, 'Dude Duke'));
        this.Clients[1].getDrugFilter().setDrug(new Drug([1, 2], 4, 1));
        this.Clients[1].getDrugFilter().setFilterType(DrugFilterType.LEVEL);
        this.Clients.push(new Client(1, 'Junkie Joe'));
        this.Clients[2].getDrugFilter().setDrug(new Drug([1, 2], 1, 1));
        this.Clients[2].getDrugFilter().setFilterType(DrugFilterType.ANY);

        return this.Clients;
    }
}