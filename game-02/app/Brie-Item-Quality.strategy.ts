import UpdateQuality from "./Update-Quality.interface";

export default class BrieItemQuality implements UpdateQuality{    
    
    increaseLimit: number = 50;

    calculateQuality(sellIn: number, quality: number):number{
        quality < this.increaseLimit ? quality += 1 : null;
        return quality;
    }
}