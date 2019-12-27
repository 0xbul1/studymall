import { debounce } from "common/utils";

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImageListener = () => {
      refresh();
    };
    this.$bus.$on("goodItemImageLoad", this.itemImageListener);
  },
  data() {
    return {
      itemImageListener: null //箭头函数监听
    };
  }
};
