<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null //better-scroll的对象
    };
  },
  props: {
    probeType: {
      //侦测类型
      type: Number,
      default: 0
    },
    pullUpLoad: {
      //上拉加载
      type: Boolean,
      default: false
    }
  },
  mounted() {
    (this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })),
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(0, 0, time);
      scrollTo;
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  }
};
</script>
<style scoped></style>
