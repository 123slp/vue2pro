export default {
  getCount: (state) => {
    return state.count + 10;
  },
  getEmail(state, getters) { // 参数只含state,getters 并且可以获取到全局
    console.log("root-getter-111", state, getters);
    return state.email;
  }
};