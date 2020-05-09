<template>
  <div class="discover">
    <div @click="clickevent">点我</div>
    <p>{{num}}</p>
    <p>我是发现{{num}}</p>
    <input type="text" v-on:input="inquiry()" v-model="message" readonly />
    <button @click="inquiry()" style="background:red">查询</button>
    <el-select v-model="selectVal" :automatic-dropdown="true">
      <el-option v-for="(item,index) in 10" :key="index" :label="item" :value="item"></el-option>
    </el-select>
    <div class="box">
      <ul>
        <li>
          <span>工资</span>
          <ul>
            <li v-for="(item,index) in 5" :key="index">{{item}}</li>
          </ul>
        </li>
        <li>
          <span>开销</span>
          <ul>
            <li v-for="(item,index) in 5" :key="index">{{item}}</li>
          </ul>
        </li>
        <li>
          <span>结余</span>
          <ul>
            <li v-for="(item,index) in 5" :key="index">{{item}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <el-select v-model="selectValue">
      <el-option label="111" value="111"></el-option>
      <el-option label="222" value="222"></el-option>
      <p>添加</p>
    </el-select>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "discover",
  data() {
    return {
      selectVal: "",
      message: "星期一",
      timeout: null,
      arrdata: []
    };
  },
  computed: {
    ...mapState(["num"])
  },
  watch: {
    arrdata() {
      console.log("1111");
    }
  },
  mounted() {
    this.arrdata = [1];
  },
  methods: {
    ...mapActions(["getnum"]),
    clickevent() {
      console.log(this.$store);
      this.getnum(5);
    },
    inquiry() {
      this.debounce(this.getVal, 1000);
    },
    getVal() {
      // console.log(this.num++); // 假设这个是ajax请求
      this.num++;
    },
    // 非立即执行函数
    debounce(func, wait) {
      // console.log("变化了");
      // let timeout;
      let _this = this; // 用来保存this的正确指向
      // return function () {
      let args = arguments; // 用来保存触发的事件类型，例如keyboard event
      // if (timeout) clearTimeout(timeout);// 每次都重新开始计时/
      clearTimeout(_this.timeout); // 每次都重新开始计时
      _this.timeout = setTimeout(function() {
        console.log("111");
        func.apply(_this, args);
      }, wait);
      // };
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes all {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.discover {
  height: 100%;
  // background: blue;
  .box > ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    li {
      width: 33%;
      &:hover > ul {
        animation: all 2s;
      }
      ul {
        width: 100%;
        opacity: 0;
        li {
          width: 80%;
          background: orange;
        }
      }
    }
  }
}
p {
  color: wheat;
}
</style>
