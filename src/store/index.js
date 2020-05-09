import Vue from 'vue';
import Vuex from 'vuex';

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import plugins from "./plugins";
import test from "./modules/test";
import brother from "./modules/brother";
Vue.use(Vuex);
// 总结: 引用在vue组件，mapstate及mapgetters不加模块可以获取到全局；加模块名只能获取到局部
// 在js文件中getters都能获取到全局state及getters；子模块root状态在第三四参数

// mutatios里面只有两个参数state，传入的参数，root为全局state；module为模块内部的state

// action 有一个context，root&module都可以获取全局的state及getter；
// 同时root-action通过“module/action&mutation触发模块”；
// module-action通过加第三个参数{root:true}触发root
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
  modules: {
    test,
    brother
  }
});