import { Dealer } from "./Dealer";
import { Drug } from "./Drug";
import * as config from './config.json';

export class Constants {
    public static Dealers: Dealer[];
    public static defaultDealers(): Dealer[] {
        if (this.Dealers) return this.Dealers;
        this.Dealers = (<any>Object).values(config.stockDrugs).map(
            (drug, index) => new Dealer(config.stockDealers[index], new Drug(drug, index + 1, 1))
        );
        return this.Dealers;
    }
}