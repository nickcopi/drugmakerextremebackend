import { Drug } from "./Drug";
import * as config from './config.json';
import { CombineResult } from "./CombineResult";
import { Client } from "./Client";

export class DrugController {
    private drugs: Drug[];
    public constructor() {
        this.drugs = [new Drug(config.stockDrugs.MARIJUANA, 1, 10)];
    }
    public getDrugs(): Drug[] {
        return this.drugs;
    }
    public getValidDrugs(client: Client): Drug[] {
        return this.drugs.filter(drug => {
            return client.getDrugFilter().matchesFilter(drug);
        });
    }
    public combineDrugs(drug1: Drug, drug2: Drug, quantity1: number, quantity2: number, bonus: number): CombineResult {
        if (!Drug.validQuanity(quantity1) || !Drug.validQuanity(quantity2))
            return new CombineResult(false, `Invalid drug quantity.`);
        if (drug1.equals(drug2) && drug1.getGrams() < quantity1 + quantity2)
            return new CombineResult(false, `Not enough drug to do this.`);
        if (quantity1 > drug1.getGrams() || quantity2 > drug2.getGrams())
            return new CombineResult(false, `Not enough drug to do this.`);
        this.removeDrug(drug1, quantity1);
        this.removeDrug(drug2, quantity2);
        const newData: number[] = [...String(Number(drug1.getData().join('')) + Number(drug2.getData().join(''))).match(/.{1,2}/g).map(data => {
            let num: number = Number(data);
            if (num >= config.drugParts.length)
                num = num % config.drugParts.length;
            let str: string = String(num);
            if (str.length < 2)
                return '0' + str;
            return str;
        }).join('')].map(s => Number(s));
        const newLevel: number = Math.round((drug1.getLevel() + drug2.getLevel()) / 2) + 1;
        const newGrams: number = Math.ceil(quantity1 * drug1.getYield() + quantity2 * drug2.getYield() * bonus);
        const newDrug: Drug = new Drug(newData, newLevel, newGrams);
        this.addDrug(newDrug);
        return new CombineResult(true, `Crafted ${newDrug.getGrams()} g of ${newDrug.getName()}.`, newDrug);
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
        if (quantity < oldDrug.getGrams()) {
            oldDrug.removeGrams(quantity);
            return;
        }
        this.drugs = this.drugs.filter(drug => !drug.equals(oldDrug));
    }
    public assignChildren(): void {
        this.drugs = this.drugs.map(obj => {
            const drug: Drug = Object.assign(new Drug(null, null, null), obj);
            drug.assignChildren();
            return drug;
        });
    }
}