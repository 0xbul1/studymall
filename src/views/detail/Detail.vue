<template>
  <div id="detail">
    <detail-nav-bar class="nav" />
    <scroll class="detail-content">
      <detail-swiper :top-images="topImages" />
      <detail-basic-info :goods="goods" />
      <detail-shop-info :shop="shop" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBasicInfo from "./childComps/DetailBasicInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shops } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null, //具体商品详情的id
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages; //详情页轮播图片
      this.goods = new Goods( //详情页整合的商品数据
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shops(data.shopInfo);
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBasicInfo,
    DetailShopInfo,
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
