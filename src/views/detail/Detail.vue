<template>
  <div id="detail">
    <detail-nav-bar />
  </div>
</template>
<script>
import detailNavBar from "./childComps/detailNavBar";
export default {
  name: "Detail",
  data() {
    return {
      iid: null //具体商品详情的id
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.$route.params.iid);
  },
  components: {
    detailNavBar
  }
};
</script>
<style scoped></style>
