<template>
  <div class="goods-list-item">
    <!-- <a :href="goodsItem.link"> -->
      <img :src="goodsItem.show.img">
      <p>{{goodsItem.title}}</p>
      <div class="title">
        <span class="price">{{goodsItem.price}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    <!-- </a> -->
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  width: 48%;
  font-size: 12px;
  text-align: center;
}
img {
  width: 100%;
  border-radius: 5px;
}
.goods-list-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  display: flex;
  justify-content: space-evenly;
}
.price, .cfav {
  color: var(--color-tint);
}
.price::before {
  content: '¥';
  color: var(--color-text);
  /* color: var(--color-tint); */
}
.cfav::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  vertical-align: top;
  background-color: #000;
  background: url('~assets/img/common/collect.svg');
  background-repeat: no-repeat;
  background-size: 12px 12px; 
}
</style>