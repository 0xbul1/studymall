<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">香菇街</div>
    </nav-bar>
    <home-swiper :banners="banners">
    </home-swiper>
    <recommend :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']"
            class="tab-control"
    />
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perferendis, explicabo debitis consequuntur?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt voluptate aut quae fuga fugiat dolore excepturi nisi nobis voluptas optio vitae expedita veniam dignissimos natus perfer
    </div>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import tabControl from 'components/content/tabControl/TabControl'
  
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import FeatureView from './childComps/FeatureView.vue'

  import { getHomeMultidata } from 'network/home'
  import { Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "Home",
    components: {
      NavBar,
      tabControl,

      HomeSwiper,
      Recommend,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {

      //请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })      
    },
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  .tab-control {
    position: sticky;
    top: 44px;    
  }
</style>