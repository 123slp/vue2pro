<template>
    <div>
        <ul>
            <li v-for="(item,index) in 5" :key="index" :class="[number===index?'active':'']" @click="action(index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      number: ""
    };
  },
  methods: {
    action(index) {
      this.number = index;
    }
  }
};
</script>
<style lang="less" scoped>
    .active{
        background: red;
    }
</style>
