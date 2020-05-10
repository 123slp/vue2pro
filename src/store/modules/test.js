export default {
  namespaced: true,
  state: {
    visit: "module",
    sum: 44,
    name: "visit-name"
  },
  getters: {
    getVisitName(state, getters, rootstate, rootgetters) { // 可以获取模块和全局的state及getters,全局的为第三，四参数
      console.log("模块下getters获取的状态", state, getters, rootstate, rootgetters);
      return state.name;
    },
    getSum(state, a, b, c) {
      console.log("module-getters", state, a, b, c);
      return state.sum;
    }
  },
  mutations: {
    setVisit(state, data) { // 只可以获取自己模块的state
      console.log("module-mutation-222", state);
      state.visit = data;
    },
    setName(state, data) {
      state.name = data;
    }
  },
  actions: {

    actionRequest(context, params) {
      console.log("module-action-222", context, params);
      context.dispatch("rootFunc", 987, {
        root: true
      });
      context.commit("setUser", "周琳", {
        root: true // 子模块可以根据{root:true}触发root的mutations和actions
      });
      context.dispatch("brother/brotherAction", null, {
        root: true
      }); // 触发兄弟模块的actions
    },
    moduleAction() {
      console.log("rootaction触发子模块的action");
    }
  }
};