import UpdateQuality from "./Update-Quality.interface";

export default class NormalItemQuality implements UpdateQuality{
   
    calculateQuality(sellIn: number, quality: number):number{
        if (quality > 0){  
            sellIn > 0 ? quality -= 1 : quality -= 2;    
        }        
        return quality;        
    }
}