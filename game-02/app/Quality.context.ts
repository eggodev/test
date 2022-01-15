import { UpdateQuality } from "./Update-Quality.interface";

export class QualityContext {
    private updateQuality!: UpdateQuality;

    setStrategy(qualityStrategy: UpdateQuality) {
        this.updateQuality = qualityStrategy;
    }
    
    executeStrategy(): number {        
        return this.updateQuality.calculate();
    }
}