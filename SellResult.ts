import { Drug } from "./Drug";


export class SellResult{
    private success:Boolean;
    private flavorText:string;
    public constructor(success:Boolean,flavorText: string){
        this.success = success;
        this.flavorText = flavorText;
    }
}