import { Upgrade } from "./Upgrade";

export class UpgradeController {
    private upgrades: Upgrade[];
    public constructor() {
        this.upgrades = [];
    }


    public assignChildren(): void {
        /*this.upgrades = this.upgrades.map(obj => {
            const upgrade: Upgrade = Object.assign(new Upgrade(null, null, null), obj);
            //upgrade.assignChildren();
            return upgrade;
        });*/
    }
}