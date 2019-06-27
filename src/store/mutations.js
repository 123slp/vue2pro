export default {
  request(state, data) {
    state.num += data;
    console.log("222---", state);
  }
};