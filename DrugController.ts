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
        let addedDrug: Boolean = false;
        this.drugs.forEach(drug => {
            if (drug.equals(newDrug)) {
                drug.addGrams(newDrug.getGrams());
                addedDrug = true;
            }
        });
        if (!addedDrug)
            this.drugs.push(newDrug);
    }
    public removeDrug(oldDrug: Drug, quantity: number): void {
        if(quantity < oldDrug.getGrams()){
            oldDrug.removeGrams(quantity);
            return;
        }
        this.drugs = this.drugs.filter(drug=>!drug.equals(oldDrug));
    }
    public assignChildren(): void {
        this.drugs = this.drugs.map(obj => {
            const drug: Drug = Object.assign(new Drug(null, null, null), obj);
            drug.assignChildren();
            return drug;
        });
    }
}