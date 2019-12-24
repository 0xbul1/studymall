<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      oneImageLoad: false // 轮播图的一张图片是否发出去了，发出去了就改变值，这里不需要防抖
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageLoad() {
      if (!this.oneImageLoad) {
        this.$emit("swiperImageLoad");
        this.oneImageLoad = true;
      }
    }
  }
};
</script>
<style scoped></style>
