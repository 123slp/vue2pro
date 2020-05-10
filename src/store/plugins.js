import createPersistedState from "vuex-persistedstate";
// vuex数据持久化
export default [
  createPersistedState({
    key: "myvuex",
    storage: window.sessionStorage,
    paths: [
      "user_info",
      "test.visit"
    ]
  }),
  createPersistedState({
    key: "msg",
    storage: window.sessionStorage,
    paths: [
      "email"
    ]
  })
];