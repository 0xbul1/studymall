<template>
  <div id="detail">
    <detail-nav-bar class="nav" />
    <scroll class="detail-content">
      <detail-swiper :top-images="topImages" />
      <detail-basic-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-goods-info="detailGoodsInfo" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBasicInfo from "./childComps/DetailBasicInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shops } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null, //具体商品详情的id
      topImages: [], // 详情页轮播图片
      goods: {}, //详情页商品数据
      shop: {}, //详情页店铺数据
      detailGoodsInfo: {} //店铺信息下面的商品描述和图片等详细信息
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      //请求接口数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shops(data.shopInfo);
      this.detailGoodsInfo = data.detailInfo;
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBasicInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 1;
  background: #fff;
  height: 100vh;
}

.detail-content {
  height: calc(100% - 44px);
}
.nav {
  position: relative;
  background: #fff;
  z-index: 1;
}
</style>
