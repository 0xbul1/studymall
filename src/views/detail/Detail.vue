<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>
<script>
import detailNavBar from "./childComps/detailNavBar";
import detailSwiper from "./childComps/detailSwiper";

import { getDetail } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null, //具体商品详情的id
      topImages: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages;
    });
  },
  components: {
    detailNavBar,
    detailSwiper
  }
};
</script>
<style scoped></style>
