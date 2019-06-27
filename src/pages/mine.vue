<template>
  <div>
    <p @click="changeAct">我是我的</p>
    <ul>
      <li v-for="(item,index) in this.jsona" :key="index">
        <p>{{item.a}}</p>
        <p>{{item.b}}</p>
        <p>{{item.c}}</p>
      </li>
    </ul>
    <div class="box"></div>
    <div class="box2" @click="listFunc" style="width;50px;height:50px;background:blue;"></div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "mine",
  data() {
    return {
      jsona: [
        {
          a: 1,
          b: 2,
          c: 3
        }
      ],
      fileList: []
    };
  },
  methods: {
    // 点击文件列表中已上传的文件时的钩子
    handlePreview() {},
    // 上传文件之前的钩子
    beforeUpload() {},
    // 文件列表移除文件时的钩子
    handleRemove() {},
    // 删除文件之前的钩子
    beforeRemove() {},
    // 文件超出个数限制的钩子
    handleExceed() {},
    changeAct() {
      let obj = { a: 2, b: 3, c: 4 };
      this.jsona = [Object.assign(this.jsona[0], obj)];
      console.log(this.jsona);
    },
    listFunc() {
      let result = this.permute([], [1, 2, 3]);
      console.log(result);
    },
    permute(temArr, testArr) {
      var permuteArr = [];
      var arr = testArr;
      function innerPermute(temArr) {
        for (var i = 0, len = arr.length; i < len; i++) {
          if (temArr.length === len - 1) {
            if (temArr.indexOf(arr[i]) < 0) {
              permuteArr.push(temArr.concat(arr[i]));
            }
            continue;
          }
          if (temArr.indexOf(arr[i]) < 0) {
            innerPermute(temArr.concat(arr[i]));
          }
        }
      }
      innerPermute(temArr);
      return permuteArr;
    }
  }
};
</script>

<style lang="less" scoped>
p {
  color: wheat;
}
.box {
  width: 100px;
  height: 100px;
  position: relative;
  background: sandybrown;
  right: 0;
}
.box:hover {
  transition: 3s;
  background: black;
  right: -150px;
}
</style>
