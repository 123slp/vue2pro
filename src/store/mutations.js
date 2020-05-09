export default {
  setNum(state, data) { // 只含有两个参数，state为全局，data为传入的数据
    state.count += data;
    console.log("root-mutations-111", state, data);
  },
  setUser(state, data) {
    console.log("子模块触发了mutation");
    state.user_info = data;
  },
  setMsg(state, data) {
    state.email = data;
  }
};