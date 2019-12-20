<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
         class="tab-control-item"
        :class="{active: currentIndex===index}"
        @click=clickTabItem(index)
          >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      clickTabItem(index){
        this.currentIndex = index;
      }
    }
  }
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  background-color: #fff;
  

}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
  transform: scale(1.1);
  transition: transform 0.3s;
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  padding-bottom: 4px;
}
</style>