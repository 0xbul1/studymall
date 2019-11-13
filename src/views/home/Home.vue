<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { getHomeMultidata } from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {

      //請求多個數據
      getHomeMultidata().then(res => {
        this.banners = res.data.banner;
        this.recommends = res.data.recommend;
      })
    },
  }
</script>
<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: var(--color-background);
  }
</style>