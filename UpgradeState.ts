export class UpgradeState {
    private level: number;
    public constructor(level: number = 1) {
        this.level = level;
    }
    public getLevel(): number {
        return this.level;
    }
    public incrementLevel(): void {
        this.level++;
    }
}