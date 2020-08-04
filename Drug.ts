import {DrugType} from './DrugType';
import * as config from './config.json';
export class Drug{
	private data : number[];
	private grams : number;
	private level : number;
	private type : DrugType;
	public constructor(level:number, data:number[], grams:number,type:DrugType){
		this.level = level;
		this.data = data;
		this.grams = grams;
		this.type = type;
	}
	public getGrams() : number {
		return this.grams;
	}
	public getType() : DrugType {
		return this.type;
	}
	public getName() : string {
		let name : string = '';
		for(let i = 0; i < this.data.length; i += 2){
			name += config.drugParts[i];
			name += config.drugParts[i+1];
		}
		return name;
	}
	public getCost() : number {
		return Math.round((this.data[Math.round(this.data.length*.75)] + this.data[Math.round(this.data.length*.25)]) * (this.level/2));
	}
	public getYield() : number {
		let yieldAmount : number = 50 - (this.data[Math.round(this.data.length*.66)] + this.data[Math.round(this.data.length*.33)] + this.data[Math.round(this.data.length/5)]);
		if(yieldAmount > 40 && this.data[Math.round(this.data.length*.66)]<3){
			yieldAmount -= 10;
		}
		return yieldAmount * 0.01;
	}

}
