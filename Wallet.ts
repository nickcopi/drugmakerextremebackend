export class Wallet {
    private money: number;
    constructor() {
        this.money = 0;
    }
    public getMoney(): number {
        return this.money;
    }
    public addMoney(money : number):void{
        this.money += money;
    }
}