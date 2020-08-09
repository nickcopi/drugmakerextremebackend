import { UpgradeState } from "./UpgradeState";
import { Wallet } from "./Wallet";
import { UpgradeResult } from "./UpgradeResult";

export class Upgrade {
    private name: string;
    private description: string;
    private costScale: number;
    private state: UpgradeState;
    public constructor(name: string, description: string, costScale: number) {
        this.name = name;
        this.description = description;
        this.costScale = costScale;
        this.state = new UpgradeState();
    }
    public getCost(): number {
        return Math.pow(this.state.getLevel() + 1, 2) * this.costScale;
    }
    public getDescription(): string {
        return this.description;
    }
    public getName(): string {
        return this.name;
    }
    public setState(state: UpgradeState){
        this.state = state;
    }
    public buy(wallet: Wallet): UpgradeResult {
        if(this.getCost() > wallet.getMoney())
            return new UpgradeResult(false,`Cannot afford ${this.getName()}.`);
        this.onBuy();
        return new UpgradeResult(true,`Purchased upgrade ${this.getName()}.`)
    }
    public onBuy(): void {

    }
}