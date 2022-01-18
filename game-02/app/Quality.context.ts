import UpdateQuality from "./Update-Quality.interface";

export default class QualityContext {
    
    private updateQuality!: UpdateQuality;

    setStrategy(qualityStrategy: UpdateQuality) {
        this.updateQuality = qualityStrategy;
    }
    
    executeStrategy(sellIn: number, quality: number): number {        
        return this.updateQuality.calculateQuality(sellIn,quality);
    }
}