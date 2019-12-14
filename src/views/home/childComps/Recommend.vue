<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  
  
  export default {
    name: "Recommend",
    props:{
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #efefef;
  padding: 10px 0;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  margin-bottom: 10px;
}
</style>