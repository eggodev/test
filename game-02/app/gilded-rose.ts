import QualityContext  from "./Quality.context";
import NormalItemQuality from "./Normal-Item-Quality.strategy";
import ConjuredItemQuality from "./Conjured-Item-Quality.strategy";
import BrieItemQuality from "./Brie-Item-Quality.strategy";
import PassItemQuality from "./Pass-Item-Quality.strategy";

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

    updateQuality() {
        const qualityContext = new QualityContext();
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].sellIn -= 1;
            switch (this.items[i].name) {
                case 'Aged Brie':
                    qualityContext.setStrategy(new BrieItemQuality());        
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    qualityContext.setStrategy(new PassItemQuality()); 
                    break;
                case 'Conjured':
                    qualityContext.setStrategy(new ConjuredItemQuality());
                    break;
                default:
                    qualityContext.setStrategy(new NormalItemQuality());
                    break;
            }
            this.items[i].quality = qualityContext.executeStrategy(this.items[i].sellIn, this.items[i].quality);
        }

        return this.items;
    }
}
