// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import add from './wasd.min';
import echarts from 'echarts';

// 样式文件，需单独引入
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css';
import "./assets/iconfont/iconfont.css";
import elementUI from 'element-ui';
import mintUI from 'mint-ui';
import iview from "iview";
import mySwiper from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css';
import 'iview/dist/styles/iview.css';
import store from "./store";
Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.use(mintUI);
Vue.use(iview);
Vue.use(mySwiper);
Vue.prototype.add = add;
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  add,
  components: {
    App
  },
  template: '<App/>'
});