import axios, { AxiosResponse } from "axios";
import NProgress from "nprogress";
import { message } from "antd";
NProgress.settings.showSpinner = false;
const request = axios.create({
  baseURL: "http://dida100.com:8888",
  timeout: 5000,
});
request.interceptors.request.use((config) => {
  let token = sessionStorage.getItem("token");
  NProgress.start();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
request.interceptors.response.use(
  (res: AxiosResponse) => {
    NProgress.done();
    if (res.status !== 200) {
      if (res.status === 401) {
        message.error("未授权");
      } else if (res.status === 500 || res.status === 505) {
        message.error("服务器错误");
      } else if (res.status === 404) {
        message.error("404找不到服务地址");
      }
    }
    return res;
  },
  (err) => {
    NProgress.done();
    console.log(err);
    return err;
  }
);

export default request