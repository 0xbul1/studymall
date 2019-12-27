<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">香菇街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlTop"
      class="tab-control-top"
      v-show="isTabFixed"
    />
    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad">
      </home-swiper>
      <recommend :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControlBottom"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="clickBackTop" v-show="isTopShow" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import tabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import Recommend from "./childComps/Recommend";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";

import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    tabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    Recommend,
    FeatureView
  },
  data() {
    return {
      banners: [], // 轮播数据
      recommends: [], // 推荐数据

      // 首页tab分类的数据
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
      currentType: "pop", //控制当前tabcontrol 变量
      isTopShow: false, // 控制首页回到顶部的组件显示
      tabOffsetTop: 0, // tabControl的offset值
      isTabFixed: false, //控制tabcontrol是否吸顶
      saveY: 0, // 保存当前页面的位置信息
      itemImageListener: null //箭头函数监听
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
  mounted() {
    // 图片加载完成重新计算beterscroll的防抖
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImageListener = () => {
      refresh();
    };
    // this.$refs.scroll.refresh();
    this.$bus.$on("goodItemImageLoad", this.itemImageListener);
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh(); // 重新刷新，防止回到顶部的bug
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY();

    this.$bus.$off("goodItemImageLoad", this.itemImageListener);
  },
  methods: {
    // 事件相关方法

    // 点击切换具体tab
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
      this.$refs.tabControlTop.currentIndex = index;
      this.$refs.tabControlBottom.currentIndex = index;
    },

    //点击回到顶部
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    //拿到滚动位置
    contentScroll(position) {
      this.isTopShow = -position.y > 1000; // 返回顶部的按钮显示不显示
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 轮播图图片加载完成发给home组件
    swiperImageLoad() {
      //若图片没有加载，获取到的offsetTop高度是错的
      this.tabOffsetTop = this.$refs.tabControlBottom.$el.offsetTop;
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
        this.$refs.scroll.finishPullUp(); // 完成上拉加载更多
      });
    }
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background: var(--color-tint);
  color: #fff;

  /*
  原生滚动需要的fixed属性
   position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; */
}

.scroll-content {
  /* background: red; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control-top {
  position: relative;
  z-index: 1;
}
</style>
