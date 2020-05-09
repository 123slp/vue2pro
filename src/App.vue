<template>
  <div id="app">
    <header>
      <h3></h3>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link to="/">
        <i class="iconfont icon-shouye"></i>
        首页
      </router-link>
      <router-link to="/discover">
        <i class="iconfont icon-faxian"></i>
        发现
      </router-link>
      <router-link to="/setting">
        <i class="iconfont icon-shezhi"></i>
        设置
      </router-link>
      <router-link to="/mine">
        <i class="iconfont icon-wode"></i>
        我的
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },

  methods: {},
  mounted() {
    console.log(this.$store);
  }
};
</script>

<style lang="less">
@import "./less/reset.less";
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: black;
  header {
    width: 100%;
    h3 {
      color: #fff;
      width: 100%;
      text-align: center;
      background: saddlebrown;
      height: 84px;
      line-height: 84px;
    }
  }
  section {
    width: 100%;
    flex: 1;
    display: flex;
    background: #ccc;
    overflow: auto;
  }
  footer {
    background: pink;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 49px;
    line-height: 49px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    a {
      text-align: center;
      flex: 1;
      line-height: 49px;
      text-decoration: none;
      color: black;
    }
  }
}
</style>
