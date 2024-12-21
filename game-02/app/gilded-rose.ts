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

    private decreaseQuality(item: Item, degradationRate: number = 1) {
        if (item.quality > 0) {
            item.quality = Math.max(0, item.quality - degradationRate);
        }
    }

    private increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;
        }
    }

    private updateSellIn(item: Item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn -= 1;
        }
    }

    private updateQualityPostSellIn(item: Item) {
        if (item.sellIn < 0) {
            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                item.quality = 0;
            } else if (item.name != 'Aged Brie' && item.name != 'Sulfuras, Hand of Ragnaros') {
                this.decreaseQuality(item);
            } else if(item.name === 'Aged Brie'){
                this.increaseQuality(item);
            }
        }
    }

    updateQuality() {
        for (const item of this.items) {
            const update: { [key: string]: (item: Item) => void } = {
                'Aged Brie': (item) => {
                    this.increaseQuality(item);
                },
                'Backstage passes to a TAFKAL80ETC concert': (item) => {
                    this.increaseQuality(item);
                    if (item.sellIn < 11) this.increaseQuality(item);
                    if (item.sellIn < 6) this.increaseQuality(item);
                },
                'Sulfuras, Hand of Ragnaros': () => {},
                'Conjured': (item) => {
                  this.decreaseQuality(item, 2);
                },
                'default': (item) => {
                    this.decreaseQuality(item);
                },
            };
    
            const updateItems = update[item.name] || update['default'];
            updateItems(item);
    
            this.updateSellIn(item);
            this.updateQualityPostSellIn(item);
        }
        return this.items;
    }
}
