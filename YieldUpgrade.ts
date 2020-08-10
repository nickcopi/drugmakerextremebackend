import { Upgrade } from "./Upgrade";

export class YieldUpgrade extends Upgrade {
    constructor(onBuy: (()=>void)) {
        super('Boosted Yield', 'Boosts yield of new drug when combining.', 10);
        this.onBuy = onBuy;
    }
    public getBonus(): number{
        return 1 + this.state.getLevel()-1 * 0.03;
    }
}