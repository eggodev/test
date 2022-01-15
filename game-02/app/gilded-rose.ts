import { QualityContext } from "./Quality.context";
import { IncreaseQuality } from "./Increase-Quality.strategy";
import { DegradeQuality } from "./Degrade-Quality.strategy";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    speedCalc(sellIn){
        let speed = 1;
        if (sellIn < 6) {
            speed = 3;                 
        } else if (sellIn < 11) {
            speed = 2;
        }
        return speed;
    }

    updateQuality() {
        const qualityContext = new QualityContext();
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].sellIn -= 1;
            switch (this.items[i].name) {
                case 'Aged Brie':
                    qualityContext.setStrategy(new IncreaseQuality(this.items[i].sellIn,this.items[i].quality,this.speedCalc(this.items[i].sellIn)));
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    qualityContext.setStrategy(new IncreaseQuality(this.items[i].sellIn,this.items[i].quality,this.speedCalc(this.items[i].sellIn)));
                    break;
                case 'Conjured':
                    qualityContext.setStrategy(new DegradeQuality(this.items[i].sellIn,this.items[i].quality,2));
                    break;
                default:
                    qualityContext.setStrategy(new DegradeQuality(this.items[i].sellIn,this.items[i].quality,1));
                    break;
            }
            this.items[i].quality = qualityContext.executeStrategy();
        }

        return this.items;
    }
}
