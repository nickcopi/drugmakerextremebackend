import { Upgrade } from "./Upgrade";

export class LevelUpgrade extends Upgrade {
    constructor(onBuy: (()=>void)) {
        super('Level Up', 'Unlocks new dealers and allows for better drug crafting.', 10);
        this.onBuy = onBuy;
    }
}