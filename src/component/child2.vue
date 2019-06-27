<template>
    <div class="child2">
        <p>2222</p>
    </div>
</template>
<script>
export default {
  name: "child2",
  data() {
    return {

    };
  },
  beforeCreate() {
    console.log("beforeCreate---000");
  },
  created() {
    console.log("created---000");
  },
  beforeMount() {
    console.log("beforeMount---000");
  },
  mounted() {
    this.message = "我变化了---";
    console.log("mounted---000");
  }
};
</script>

