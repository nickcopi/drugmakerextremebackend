import { Drug } from "./Drug";
import * as config from './config.json';

export class DrugController {
    private drugs: Drug[];
    public constructor() {
        this.drugs = [new Drug(config.stockDrugs.MARIJUANA, 1, 10)];
    }
    public getDrugs(): Drug[] {
        return this.drugs;
    }
    public addDrug(newDrug: Drug): void {
        let addedDrug:Boolean = false;
        this.drugs.forEach(drug=>{
            if(drug.equals(newDrug)){
                drug.addGrams(newDrug.getGrams());
                addedDrug = true;
            }
        });
        if(!addedDrug)
            this.drugs.push(newDrug);
    }
    public assignChildren(): void {
        this.drugs = this.drugs.map(obj => {
            const drug: Drug = (<any>Object).assign(new Drug(null, null, null), obj);
            drug.assignChildren();
            return drug;
        });
    }
}