<template>
  <div>
    <p @click="showAction">我是首页</p>
    <swiper>
      <swiper-slide v-for="(item,index) in 10" :key="index">
        <p>{{item}}</p>
      </swiper-slide>
    </swiper>
    <homeChild v-show="isShow" :message="message">
      <template slot-scope="scope">
        <p v-for="(item,index) in scope.data" :key="index">{{item.name}}</p>
      </template>
    </homeChild>
    <mt-picker :show-toolbar="true" ref="picker" value-key="cName" :slots="dataLists">
      <span class="btn btn-cancel">取消</span>
      <span class="btn btn-sure" @click="getValue">确定</span>
    </mt-picker>
    <form action>
      <input type="text">
    </form>
    <div id="domBox" style="width:300px;height:200px"></div>
  </div>
</template>
<script>
import homeChild from "@/component/homeChild";
export default {
  name: "home",
  components: {
    homeChild
  },
  data() {
    return {
      isShow: false,
      message: "你是猪啊",
      dataLists: [
        {
          flex: 1,
          values: ["2019"],
          className: "slot1",
          textAlign: "center"
        },
        {
          flex: 1,
          values: ["1", "2", "3", "4", "5"],
          className: "slot2",
          textAlign: "center"
        },
        {
          flex: 1,
          values: ["6", "7", "8", "9", "10"],
          className: "slot3",
          textAlign: "center"
        },
        {
          flex: 1,
          values: ["6", "7", "8", "9", "10"],
          className: "slot4",
          textAlign: "center"
        },
        {
          flex: 1,
          values: ["00", "15", "30", "45"],
          className: "slot5",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    showAction() {
      // this.isShow = true;
    },
    getValue(val) {
      console.log(val);
    }
  },

  beforeCreate() {
    console.log("beforeCreate---111");
  },
  created() {
    console.log("created---111");
  },
  beforeMount() {
    console.log("beforeMount---111");
  },
  mounted() {
    document.body.addEventListener(
      "touchmove",
      e => {
        e.preventDefault();
      },
      { passive: false }
    );
    console.log(document.forms);
    console.log("mounted---111");
    console.log(this);
    this.add(5);
    this.message = "我变化了---";
    let dom = document.getElementById("domBox");
    let myechart = this.$echarts.init(dom);
    let option = {
      tooltip: {
        trigger: "item"
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "right",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "left"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ]
        }
      ]
    };
    myechart.setOption(option);
  }
};
</script>
<style lang="less" scoped>
p {
  color: wheat;
}
</style>
