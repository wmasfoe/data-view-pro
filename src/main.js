import Vue from "vue";
import CompositionApi from "@vue/composition-api";
import * as echarts from "echarts";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(CompositionApi);

Vue.prototype.$charts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
