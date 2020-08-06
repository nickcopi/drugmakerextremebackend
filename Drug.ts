import { Item } from './Item';
import * as config from './config.json';
export class Drug implements Item {
	private data: number[];
	private grams: number;
	private level: number;
	public constructor(data: number[], level: number, grams: number) {
		this.level = level;
		this.data = data;
		this.grams = grams;
	}
	public getGrams(): number {
		return this.grams;
	}
	public addGrams(grams: number): void {
		this.grams += grams;
	}
	public removeGrams(grams: number): void {
		this.grams -= grams;
	}
	public getName(): string {
		let name: string = '';
		const partsLength: number = config.drugParts.length;
		for (let i = 0; i < this.data.length; i += 2) {
			//const tens = String(this.data[i]);
			const index: number = (Number(String(this.data[i]) + String(this.data[(i + 1)]))) % partsLength;
			name += config.drugParts[index];
		}
		return name;
	}
	public getData(): number[] {
		return this.data;
	}
	public getLevel(): number {
		return this.level;
	}
	public getCost(): number {
		return Math.round((this.data[Math.round(this.data.length * .75)] + this.data[Math.round(this.data.length * .25)]) * (this.level / 2));
	}
	public getStackCost(): number {
		return this.getCost() * this.getGrams();
	}
	public getYield(): number {
		let yieldAmount: number = 50 - (this.data[Math.round(this.data.length * .66)] + this.data[Math.round(this.data.length * .33)] + this.data[Math.round(this.data.length / 5)]);
		if (yieldAmount > 40 && this.data[Math.round(this.data.length * .66)] < 3) {
			yieldAmount -= 10;
		}
		return yieldAmount * 0.01;
	}
	public equals(drug: Drug): Boolean {
		return drug.data.join('') === this.data.join('') && drug.level === this.level;
	}
	public assignChildren(): void {
	}

}
