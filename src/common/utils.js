// 防抖，如果下一次执行（一张图片加载完成）来的非常快，就会将上一次的取消掉
export function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
