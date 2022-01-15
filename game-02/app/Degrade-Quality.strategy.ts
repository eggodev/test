import { UpdateQuality } from "./Update-Quality.interface";

export class DegradeQuality implements UpdateQuality{
    sellIn: number;
    quality: number;
    speed: number;

    constructor(sellIn: number,quality: number,speed: number){
        this.sellIn = sellIn;
        this.quality = quality;
        this.speed = speed;
    }

    calculate(): number{
        if (this.quality > 0){  
            if ((this.sellIn > 0) && (this.speed == 1)) {
                this.quality -= 1;
            } else {
                this.quality = this.quality >= 2 ? this.quality -= 2 : this.quality = 0;    
            }
        }
        return this.quality;
    }
}