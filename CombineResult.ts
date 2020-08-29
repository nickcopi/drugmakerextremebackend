import { Drug } from "./Drug";

export class CombineResult {
    private success: Boolean;
    private flavorText: string;
    private drug: Drug;
    constructor(success: Boolean, flavorText: string, drug: Drug = null) {
        this.success = success;
        this.flavorText = flavorText;
        this.drug = drug;
    }
    getDrug(): Drug {
        return this.drug;
    }
}