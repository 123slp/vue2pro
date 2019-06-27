<template>
  <div class="setting">
    <p @click="show">我是设置{{session}}</p>
    <el-table :data="tableData" width="100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-row style="width:100%">
              <el-col>
                <el-form-item label="商品名称">
                  <span>{{ props.row.a }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.b }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.c }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.d }}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="商品分类">
                  <span>{{ props.row.e }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.f }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.g }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="a" label="星期一"></el-table-column>
      <el-table-column prop="b" label="星期二"></el-table-column>
      <el-table-column prop="c" label="星期三"></el-table-column>
      <el-table-column prop="d" label="星期四"></el-table-column>
      <template slot="empty">
        <p :style="{'marginTop': '23px'}">未查询到您的交易记录</p>
      </template>
    </el-table>
    <Table :columns="columns" :data="data1"></Table>
  </div>
</template>
<script>
import test from "./test";
export default {
  name: "setting",
  components: {
    test
  },
  data() {
    return {
      message: "2222",
      tableData: [
        // {
        //   a: "11",
        //   b: "12",
        //   c: "13",
        //   d: "14",
        //   e: "15",
        //   f: "16",
        //   g: "17"
        // }
      ],
      columns: [
        {
          title: "name",
          key: "name"
        },
        {
          title: "age",
          key: "age"
        },
        {
          title: "height",
          key: "height"
        }
      ],
      data1: [
        { name: "111", age: "222", height: "333" },
        { name: "111", age: "222", height: "333" },
        { name: "111", age: "222", height: "333" },
        { name: "111", age: "222", height: "333" },
        { name: "111", age: "222", height: "333" }
      ]
    };
  },
  methods: {
    show() {
      console.log("111");
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
  /deep/.el-table {
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
}
p {
  color: wheat;
}
</style>
