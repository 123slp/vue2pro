<template>
  <div class="setting">
    <p @click="show" class="title">vuex</p>
    <div class="storeState">
      <div class="left">
        <el-button type="primary" @click="getAction"></el-button>
        <el-button @click="rootGomodule">root-module</el-button>
        <p>mapstate:root部分，可以全局store-state-getters</p>
        <p>root-state:---{{userName}}</p>
        <p>module-test-tate:----{{moduleVisit}}</p>
        <p>root-state-getter:----{{rootGetterCount}}</p>
        <p>module-state-getter:----{{moduleGetterSum}}</p>
        <p>mapgetters:root部分，不支持函数形式--可以全局的getters</p>
        <p>root-getter:---{{getteremail}}</p>
        <p>root-module-getter:---{{rootmodulename}}</p>
        <p>mapgetters:module部分-只能获取模块下的getters</p>
        <p>modules-getter:---{{moduleName}}</p>
        <div class="threebox"></div>
      </div>
      <div class="right">
        <div class="top">
          <el-table :data="tableData" style="width:100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import test from "./test";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "setting",
  components: {
    test
  },
  data() {
    return {
      sum: 8,
      msg: "2192530185qq.com",
      message: "2222",
      tableData: [
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" },
        { name: "小小", date: "1212", address: "南山区" }
      ]
    };
  },
  computed: {
    // 繁琐的取值方式
    vuexNum() {
      return this.$store.state.num + this.sum;
    },
    // mapState辅助函数 root
    // ...mapState(["user_info", "email"]), 常用方式
    ...mapState({
      userName: "user_info",
      email: "email",
      rootCount: state => state.count,
      moduleVisit: state => state.test.visit, // "test.visit"(不可行)
      rootGetterCount(state, getters) {
        // 全局的store里面的state，getters
        console.log("root-state", state, getters);
        return getters.getCount + this.sum;
      },
      moduleGetterSum(state, getters) {
        console.log("module-state", state, getters);
        return getters["test/getSum"] + this.sum;
      }
    }),
    // mapState辅助函数 modules
    // ...mapState("test", ["visit"]), 常用方式
    ...mapState("test", {
      // 箭头函数可使代码更简练
      testSum: state => state.sum, // testSum:"sum"(亦可)
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      visitor(state, getters) {
        // 模块的的state，getters
        console.log("modules-state", state, getters);
        return state.visit + this.sum;
      }
    }),
    // mapGetters  root
    // ...mapGetters(["changeName"]) ===等价于下列方式  不支持函数形式
    ...mapGetters({
      gettercount: "getCount",
      getteremail: "getEmail",
      rootmodulename: "test/getVisitName" // 获取模块下的getters
    }),
    // mapgetters   module
    ...mapGetters("test", {
      moduleName: "getVisitName"
    })
  },
  methods: {
    // ...mapMutations(["setUser", "setMsg", "setNum"]),
    ...mapMutations({
      setUser: "setUser",
      setMsg: "setMsg",
      setNum: "setNum",
      setName: "test/setName" // 可以获取到模块的mutations
    }),
    ...mapMutations("test", ["setVisit"]),
    show() {
      this.setUser("苏良平");
      this.setVisit("小白兔,设置成功了");
      this.setMsg("2192530185qq.com");
      this.setNum(123);
      this.setName("长江-黄河");
      this.actionRoot(1, 2);
    },
    // action部分
    ...mapActions({
      actionRoot: "actionRoot",
      rootTomodule: "rootTomodule",
      actionRequest: "test/actionRequest"
    }),
    getAction() {
      this.actionRequest(333); // 子模块触发root--action
    },
    rootGomodule() {
      this.rootTomodule(); // root - action触发子模块的
    }
  },
  mounted() {
    window.onresize = () => {
      console.log("111---");
    };
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="less" scoped>
.setting {
  display: flex;
  overflow: auto;
  flex: 1;
  flex-direction: column;
  .threebox{
    width: 0;
    height: 0;
    border:50px solid transparent;
    border-top: 50px solid #ccc;
  }
  .title {
    height: 20px;
    background: red;
  }
  .storeState {
    flex: 1;
    height: 100%;
    display: flex;
    color: #fff;
    overflow: auto;
    .left {
      flex: 1;
      background: #000;
    }
    .right {
      flex: 1;
      background: #ccc;
      overflow: auto;
      position: relative;
      .top {
        height: 100%;
        /deep/.el-table {
          max-height: 100%;
          overflow: auto;
        }
      }
    }
  }
}
</style>
