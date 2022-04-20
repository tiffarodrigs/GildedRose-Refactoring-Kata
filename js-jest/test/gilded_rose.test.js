const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  describe("Sulfuras", () => {
    it("when sellIn is 0,updateQuality to return Quality to be 80",function(){
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
      const gildedRose = new Shop([sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(sulfuras)
    });

    it("when sellIn is 8,updateQuality to return Quality to be 80",function(){
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 8, 80)
      const gildedRose = new Shop([sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(sulfuras)
    });

    it("when sellIn is 3,updateQuality to return Quality to be 80",function(){
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 3, 80)
      const gildedRose = new Shop([sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(sulfuras)
    });
    it("when sellIn is 30,updateQuality to return Quality to be 80",function(){
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 30, 80)
      const gildedRose = new Shop([sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(sulfuras)
    });
    it("when sellIn is negative ,updateQuality to return Quality to be 80",function(){
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
      const gildedRose = new Shop([sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(sulfuras)
    });
  });


  describe("Aged Brie", () => {
    
    it("when sellIn is 0,updateQuality to return Quality to be 50",function(){
      const agedBrie = new Item("Aged Brie", 0, 50);
      const expected = new Item("Aged Brie", -1, 50);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(agedBrie)
    });

    it("Quality increases by 1 when sellIn is  10 days or less",function(){
      const agedBrie = new Item("Aged Brie", 8, 25);
      const expected = new Item("Aged Brie", 7, 26);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

    it("Quality increases by 1 when sellIn is  5 days or less",function(){
      const agedBrie = new Item("Aged Brie", 3, 25);
      const expected = new Item("Aged Brie", 2, 26);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected);
    });
    it("when sellIn is 30,updateQuality tio return quality incresed by 1",function(){
      const agedBrie = new Item("Aged Brie", 30, 25);
      const expected = new Item("Aged Brie", 29, 26);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected);
    });
    it("when sellIn is negative, updateQuality to return Quality increased by 1",function(){
      const agedBrie = new Item("Aged Brie", -1, 25);
      const expected = new Item("Aged Brie", -2, 26);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

    it("The Quality of an item is never more than 50",function(){
      const agedBrie = new Item("Aged Brie", 2, 50);
      const expected = new Item("Aged Brie", 1, 50);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    }); 
    it("The Quality of an item is never more than 50 return quality =50 when greater than 50",function(){
      const agedBrie = new Item("Aged Brie", 2, 51);
      const expected = new Item("Aged Brie", 1, 50);
      const gildedRose = new Shop([agedBrie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });
  });

  describe("backstage", ()=>{

    it("The Quality of backstage increases by 1 as its SellIn value approaches",function(){
      const backstage = new Item("Backstage", 17, 25);
      const expected = new Item("Backstage", 16, 26);
      const gildedRose = new Shop([backstage]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    }); 


    it("Quality increases by 2 when sellIn is 10 days or less ",function(){
      const backstage = new Item("Backstage", 8, 25);
      const expected = new Item("Backstage", 7, 27);
      const gildedRose = new Shop([backstage]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

    it("Quality increases by 3 when sellIn is 5 days or less ",function(){
      const backstage = new Item("Backstage", 5, 25);
      const expected = new Item("Backstage", 4, 28);
      const gildedRose = new Shop([backstage]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

  })

  describe("Any items", ()=>{
    it("Once the sell by date has passed, Quality degrades twice as fast",function(){
      const anyItem = new Item("Any item", -2, 25);
      const expected = new Item("Any item", -3, 23);
      const gildedRose = new Shop([anyItem]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

    it("Once the sell by date has passed, Quality degrades twice as fast,But if quality can never be negative",function(){
      const anyItem = new Item("Any item", -2, 1);
      const expected = new Item("Any item", -3, 0);
      const gildedRose = new Shop([anyItem]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

    it("The Quality of an item is never more than 50",function(){
      const anyItem = new Item("Any item", 2, 52);
      const expected = new Item("Any item", 1, 50);
      const gildedRose = new Shop([anyItem]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    }); 

    it("Once the sell by date has passed, Quality degrades twice as fast,But if quality can never be negative",function(){
      const anyItem = new Item("Any item", 5, 5);
      //const expected = new Item("Any item", -3, 0);
      const gildedRose = new Shop([anyItem]);
      const items = gildedRose.updateQuality();
      //expect(typeof Shop ).toEqual(typeof gildedRose)
      expect(gildedRose instanceof Shop ).toEqual(true)
      //auto instanceof Car
      //gildedRose.GetType()
      //typeof(Pastry), pastryObj.GetType()
    });

    it("The Quality of an item is never negative",function(){
      const anyItem = new Item("Any item", 2, -52);
      const expected = new Item("Any item", 1, 0);
      const gildedRose = new Shop([anyItem]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(expected)
    });

  });


});
