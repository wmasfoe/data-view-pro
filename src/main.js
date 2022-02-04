import CompositionApi from "@vue/composition-api";
import store from "./store";

import Vue from "vue";
import App from "./App.vue";
import * as Echarts from "echarts";

// qiankun 新增导入
import VueRouter from "vue-router";
import { routes } from "./router";
import "./public-path";

Vue.config.productionTip = false;
Vue.use(CompositionApi);
Vue.prototype.$echarts = Echarts;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    // 确保 /data-view-light/ 与 qiankun 中的配置一致
    base: window.__POWERED_BY_QIANKUN__ ? "/data-view-pro/" : "/",
    mode: "history",
    routes, // 注意，这里使用的是 routes 并不是 vue-cli 默认导出的 router
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 微应用独立运行时，非 qiankun 启动
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// qiankun 必须的 生命周期 hook，大部分报错都是因为生命周期 hook
export async function bootstrap() {
  // qiankun 启动改项目时执行的函数
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  // qiankun 挂载项目时执行的函数，可以在函数中做一些 qiankun 中初始化的操作
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  // 卸载时执行，移除所有事件监听，触发 gc
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
