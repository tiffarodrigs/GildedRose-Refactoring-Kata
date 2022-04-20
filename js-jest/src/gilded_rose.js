class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    
    // -Once the sell by date has passed, Quality degrades twice as fast
    // -The Quality of an item is never negative
	  // - The Quality of an item is never more than 50
	  // - "Aged Brie" actually increases in Quality the older it gets --- covered
	  // - "Sulfuras", being a legendary item, never has to be sold or decreases in Quality  --- covered
	  // - "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches; --- covered
	  // Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	  // Quality drops to 0 after the concert

    this.items = this.items.map((item) => {

      //"Sulfuras", being a legendary item, never has to be sold or decreases in Quality
      if(item.name == "Sulfuras, Hand of Ragnaros") {
        return item;
      }

      
      item.sellIn = item.sellIn - 1;

      // The Quality of an item is never more than 50
      if(item.quality >=50 )
      {
        item.quality = 50
      }
      //At the end of each day our system lowers both values for every item
      if(item.quality < 50 && item.name != "Aged Brie" && item.name != "Backstage")
      {
        if( item.sellIn > 0 ){
          if(item.quality >= 0) {
            item.quality = item.quality - 1;
          }
          else {
            item.quality = 0; // Quality can never be negative
          }
        }

        //Once the sell by date has passed, Quality degrades twice as fast
        if(item.sellIn < 0 ) {
          if(item.quality >= 2) {
          item.quality = item.quality - 2
          } else {
            item.quality = 0; // Quality can never be negative
          }
        }
      }

      //"Aged Brie" actually increases in Quality the older it gets
      if(item.name=="Aged Brie" && item.quality <= 49 ) {
        item.quality = item.quality + 1;
      }

      /*Quality increases by 2 when there are 10 days or less 
      and by 3 when there are 5 days or less but*/
      if(item.name == "Backstage"){
        if(item.sellIn > 0){
          item.quality = item.quality + 1;
          if(item.name == "Backstage" && item.sellIn <= 10){
            item.quality = item.quality + 1;
            if(item.sellIn <= 5){
            item.quality = item.quality + 1;
            }
          }
        } 
      } 
      return item;
    });
    return this.items;
  }

  /*updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }*/
}

module.exports = {
  Item,
  Shop
}
