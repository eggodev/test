import UpdateQuality from "./Update-Quality.interface";

export default class PassItemQuality implements UpdateQuality{    

    increaseCalc(sellIn: number){
        let increaseRef = 1;
        if (sellIn < 6) {
            increaseRef = 3;                 
        } else if (sellIn < 11) {
            increaseRef = 2;
        }
        return increaseRef;
    }
    
    calculateQuality(sellIn: number, quality: number):number{
        if(sellIn > 0){
            if (quality <= 50){
                quality = quality + this.increaseCalc(sellIn) > 50 ? quality = 50 : quality += this.increaseCalc(sellIn);
            }
        } else {        
         quality = 0;
        }
        return quality;
    }
}