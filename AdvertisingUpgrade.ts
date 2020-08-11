import { Upgrade } from "./Upgrade";

export class AdvertisingUpgrade extends Upgrade {
    constructor(onBuy: (()=>void)) {
        super('Advertising', 'Adds 3 new clients.', 5);
        this.onBuy = onBuy;
    }
}