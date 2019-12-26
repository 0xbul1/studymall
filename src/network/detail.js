import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const p = new Person('zzz',123)

export class Goods {
  //将后台商品数据整合
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.reaPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class Shops {
  // 商品下面的店铺数据
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  //商品参数
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.info = info.set;
    this.sizes = rule.tables;
  }
}
