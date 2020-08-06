export class Wallet {
    private money: number;
    constructor(private startMoney?: number) {
        this.money = startMoney || 0;
    }
    public getMoney(): number {
        return this.money;
    }
    public addMoney(money: number): void {
        this.money += money;
    }
    public removeMoney(money: number): void {
        this.money -= money;
    }
}