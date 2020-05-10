<template>
  <div class="paramsComp">
    <el-button size="small" type="primary" @click="getform">点我</el-button>
  </div>
</template>
<script>
export default {
  name: "paramsComp",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    getform() {
      this.form = {};
      this.$emit("transform", this.form);
    }
  }
};
</script>

