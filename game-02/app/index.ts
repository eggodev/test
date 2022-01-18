import { Item, GildedRose } from "./gilded-rose";

const item1 = new Item('Aged Brie',6,32);
const item2 = new Item('Backstage passes to a TAFKAL80ETC concert',6,20);
const item3 = new Item('Conjured',1,8);
const item4 = new Item('Other',2,5);

const res = new GildedRose([item1,item2,item3,item4]);
console.log(res.updateQuality());