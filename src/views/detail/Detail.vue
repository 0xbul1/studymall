<template>
  <div id="detail">
    <detail-nav-bar class="nav" />
    <scroll class="detail-content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-basic-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-goods-info="detailGoodsInfo"
        @imageLoad="imageLoad"
      />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
      <goods-list :goods="recommends" class="recommend"></goods-list>
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBasicInfo from "./childComps/DetailBasicInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { itemListenerMixin } from "common/mixin";
import {
  getDetail,
  getRecommend,
  Goods,
  Shops,
  GoodsParam
} from "network/detail";

export default {
  name: "Detail",
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null, //具体商品详情的id
      topImages: [], // 详情页轮播图片
      goods: {}, //详情页商品数据
      shop: {}, //详情页店铺数据
      detailGoodsInfo: {}, //店铺信息下面的商品描述和图片等详细信息
      paramInfo: {}, // 商品的参数（尺码等）
      commentInfo: {}, //评论信息
      recommends: [] //推荐数据
      // itemImageListener: null //箭头函数监听
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    // 获取详情数据
    getDetail(this.iid).then(res => {
      //请求接口数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shops(data.shopInfo);
      this.detailGoodsInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBasicInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,

    Scroll,
    GoodsList
  },
  methods: {
    imageLoad() {
      // 重新计算betterscroll的高度
      this.$refs.scroll.refresh();
    }
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("goodItemImageLoad", this.itemImageListener);
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
.recommend {
  padding-top: 10px;
}
.recommend::before {
  content: "推荐你看看这些";
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
}
</style>
