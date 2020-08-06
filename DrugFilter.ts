import { Drug } from "./Drug";
import { DrugFilterType } from "./DrugFilterType";
import * as config from './config.json';

export class DrugFilter {
    private drug: Drug;
    private filterType: DrugFilterType;
    constructor(level: number) {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                this.filterType = DrugFilterType.LEVEL;
                break;
            case 1:
                this.filterType = DrugFilterType.DATA_MATCH
                break;
            case 2:
                this.filterType = DrugFilterType.QUANTITY;
                break;
            case 3:
                this.filterType = DrugFilterType.ANY;
                break;
        }
        this.drug = new Drug(
            [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
            level * (Math.floor(Math.random() * 5) + 1),
            (Math.floor(Math.random() * level) + 1) * 10
        );
    }
    public getDescription(): string {
        switch(this.filterType){
            case DrugFilterType.LEVEL:
                return `something of strength ${this.drug.getLevel()} or higher.`;
                break;
            case DrugFilterType.QUANTITY:
                return `in bulk of ${this.drug.getGrams()} g units.`;
                break;
            case DrugFilterType.DATA_MATCH:
                return `something with "${config.drugParts[this.drug.getData().join('')]}" in the name.`;
                break;
            case DrugFilterType.ANY:
                return `anything but for ${config.anyReduction} of the price.`;
                break;
            default:
                console.error('Unknown filter type?');
                return `nothing.`;
        }
    }
    public getDrug(): Drug {
        return this.drug;
    }
    public setDrug(drug: Drug): void {
        this.drug = drug;
    }
    public getFilterType(): DrugFilterType {
        return this.filterType;
    }
    public setFilterType(filterType: DrugFilterType): void {
        this.filterType = filterType
    }
    public getQuantityMultiplier(): number {
        return this.filterType === DrugFilterType.QUANTITY ? this.drug.getGrams() : 1;
    }
    public getPriceMultiplier(): number {
        return this.filterType === DrugFilterType.ANY ? config.anyReduction : 1;
    }
    public matchesFilter(drug: Drug): Boolean {
        switch (this.filterType) {
            case DrugFilterType.LEVEL:
                return drug.getLevel() >= this.drug.getLevel();
                break;
            case DrugFilterType.QUANTITY:
                return drug.getGrams() >= this.drug.getGrams();
                break;
            case DrugFilterType.DATA_MATCH:
                return drug.getData().join('').includes(this.drug.getData().join(''));
                break;
            case DrugFilterType.ANY:
                return true;
                break;
            default:
                console.error('Unknown filter type?');
                return false;
        }
    }
    public assignChildren(): void {
        this.drug = (<any>Object).assign(new Drug(null, null, null), this.drug);
        this.drug.assignChildren();
    }
}