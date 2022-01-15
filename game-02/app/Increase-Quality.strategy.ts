import { UpdateQuality } from "./Update-Quality.interface";

export class IncreaseQuality implements UpdateQuality{
    sellIn: number;
    quality: number;
    speed: number;

    constructor(sellIn: number,quality: number,speed: number){
        this.sellIn = sellIn;
        this.quality = quality;
        this.speed = speed;
    }

    calculate(): number{
        if (this.quality <= 50){
            this.quality = this.quality + this.speed > 50 ? this.quality = 50 : this.quality += this.speed;
        }
        
        if(this.sellIn <= 0) this.quality = 0;
        return this.quality;
    }
}