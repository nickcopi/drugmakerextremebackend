import { Drug } from "./Drug";
import { Dealer } from "./Dealer";
import { Client } from "./Client";
import { Wallet } from "./Wallet";

export class Save{
    private drugs : Drug[];
    private dealers : Dealer[]; 
    private clients : Client[];
    private level : number;
    private wallet : Wallet;
    public constructor(){
        
    }
}