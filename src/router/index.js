import Vue from 'vue';
import Router from 'vue-router';
const home = () => import(/* webpackChunkName: "group-foo" */ '../pages/home.vue');
const discover = () => import(/* webpackChunkName: "group-foo" */ '../pages/discover.vue');
const setting = () => import(/* webpackChunkName: "group-foo" */ '../pages/setting.vue');
const mine = () => import(/* webpackChunkName: "group-foo" */ '../pages/mine.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
});
