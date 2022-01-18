import UpdateQuality from "./Update-Quality.interface";

export default class ConjuredItemQuality implements UpdateQuality{
   
    degradeRef: number = 2;

    calculateQuality(sellIn: number, quality: number):number{
        if (sellIn > 0){  
            quality = quality - this.degradeRef < 0 ? quality = 0 : quality -= this.degradeRef;    
        } else {
            quality = quality - (this.degradeRef * 2) < 0 ? quality = 0 : quality -= this.degradeRef * 2;
        }      
        return quality;        
    }
}