<template>
  <div>{{}}</div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null //具体商品详情的id
    };
  },
  created() {
    // this.iid = this.$route.params;
    console.log(this.$route.params.iid);
  }
};
</script>
<style scoped></style>
