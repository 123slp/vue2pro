export default {
  getnum({
    commit
  }, data) {
    console.log("3222", data, commit);
    commit("request", data);
  }
};