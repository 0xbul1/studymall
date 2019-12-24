import axios from "axios";

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    // baseURL: "http://106.54.54.237:8000/api/w1",
    baseURL: "http://123.207.32.32:8000/api/w1",
    timeout: 5000
  });

  //axios的拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  return instance(config);
}
