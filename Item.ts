export interface Item {
    //buy(Wallet: wallet) : boolean;
    getName(): string;
    getGrams(): number;
    getStackCost(): number;
    assignChildren(): void;
}