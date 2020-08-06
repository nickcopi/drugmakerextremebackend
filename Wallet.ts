export class Wallet {
    private money: number;
    constructor(money: number = 0) {
        this.money = money;
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