<template>
  <div id="app">
    <header>
      <h3> I LOVE YOU </h3>
    </header>
    <section>
      <router-view/>
    </section>
    <footer>
      <a href="" to="/">首页</a>
      <a href="" to="/discover">发现</a>
      <a href="" to="/setting">设置</a>
      <a href="" to="/mine">我的</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
html{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
body{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background: black;
  header{
    width: 100%;
    h3{
      margin: 0;
      padding: 0;
      width: 100%;
    background: saddlebrown;
    height: 84px;
    display: flex;
    justify-content: center;
    line-height: 84px;
    position: absolute;
    top: 0;
    left: 0;
    }
  }
  section{
    width: 100%;
    position: absolute;
    left: 0;
    top: 100px;
    background: #ccc;
    margin: 84px 0 50px 0;
  }
  footer{
    background: pink;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 49px;
    line-height: 49px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    a{
      text-align: center;
      outline: none;
    }
  }
}
</style>
