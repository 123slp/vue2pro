export default {
  actionRoot(context, params) {
    console.log("root-actions--11", context, params);
  },
  rootFunc(context, val) {
    console.log("子模块触发了跟action", val);
  },
  rootTomodule(context) {
    context.dispatch("test/moduleAction"); // 触发子模块的action和mutation
    context.commit("test/setName", "英雄联盟");
  }
};