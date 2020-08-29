import { Drug } from "./Drug";

export class Recipe {
    private parent1: number[];
    private parent2: number[];
    private child: number[];
    constructor(parent1: number[], parent2: number[], child: number[]) {
        this.parent1 = parent1;
        this.parent2 = parent2;
        this.child = child;
    }
    getDrug(data: number[]): Drug {
        return new Drug(data, 1, 1);
    }
    toString(): string {
        return `${this.getDrug(this.parent1).getName()} + ${this.getDrug(this.parent2).getName()} -> ${this.getDrug(this.child).getName()}`;
    }
} 