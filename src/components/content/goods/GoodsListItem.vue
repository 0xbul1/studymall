<template>
  <div class="goods-list-item" @click="toGoodsDetail">
    <!-- <a :href="goodsItem.link"> -->
    <img :src="showImage" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    //详情的推荐使用的是goodsitem组件，但是goodsitem组件会发送给首页一个全局事件，但是我实在详情页调用不需要，这是一方面可以用路由判断，另一方面当首页deactived，可以取消这个事件的函数

    imageLoad() {
      // 方法一
      // if(this.$route.path.indexOf('/home')){
      //   this.$bus.$emit("homeGoodItemImageLoad");
      // }else if(this.$route.path.indexOf('/detail')){
      //   this.$bus.$emit("detailGoodItemImageLoad");
      // }
      //方法二使用一个事件，混入
      this.$bus.$emit("goodItemImageLoad");
    },
    toGoodsDetail() {
      this.$router.push("/detail/" + this.goodsItem.iid);
      // this.$router.push({
      //   path: '/detaiil',
      //   query: {}
      // })
    }
  }
};
</script>
<style scoped>
.goods-list-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}

img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .cfav {
  position: relative;
}

.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
