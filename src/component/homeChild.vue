<template>
  <div class="homeChild">
    <p>{{message}}</p>
    <child2></child2>
    <slot :data="scope"></slot>
  </div>
</template>
<script>
import child2 from "./child2";
export default {
  name: "homeChild",
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  components: {
    child2
  },
  data() {
    return {
      num: 11111,
      scope: [
        {id: 1, name: "苏良平1"},
        {id: 2, name: "苏良平2"},
        {id: 3, name: "苏良平3"},
        {id: 4, name: "苏良平4"}
      ]
    };
  },
  watch: {
    message: {
      handler: function(newVal, oldVal) {
        console.log("变化了---", newVal, oldVal);
      },
      immediate: true
    }
  },
  beforeCreate() {
    console.log("beforeCreate---");
  },
  created() {
    console.log("created---");
  },
  beforeMount() {
    console.log("beforeMount---");
  },
  mounted() {
    console.log("mounted---");
  }
};
</script>

