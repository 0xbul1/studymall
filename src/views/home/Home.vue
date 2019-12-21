<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">香菇街</div>
    </nav-bar>
    <home-swiper :banners="banners"> </home-swiper>
    <recommend :recommends="recommends" />
    <feature-view />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
    />
    <goods-list :goods="showGoods" />
    <!-- <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis
      consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore
      excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perfer
    </div> -->
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import Recommend from "./childComps/Recommend";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "Home",
  components: {
    NavBar,
    tabControl,
    GoodsList,

    HomeSwiper,
    Recommend,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop" //tabcontrol 变量
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    // 数据请求的方法

    // 请求轮播图和推荐数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //请求tab数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
