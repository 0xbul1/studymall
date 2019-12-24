<template>
  <div>
    <nav-bar>
      <div slot="left" class="detail-backimg" @click="backimgClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="detail-nav">
        <div
          v-for="(item, index) in title"
          class="detail-nav-item"
          :class="{ active: index === currentIndex }"
          @click="detaiilNavItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "detailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    detaiilNavItemClick(index) {
      this.currentIndex = index;
    },
    backimgClick() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.detail-nav {
  display: flex;
  font-size: 14px;
}
.detail-nav-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
  transform: scale(1.1);
  transition: transform 0.3s;
}
.detail-backimg img {
  vertical-align: middle;
}
</style>
