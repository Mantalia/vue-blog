<template>
  <div class="index-container fadeInLeft animated">
    <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.index-container {
	    height: 100%;
	  }
</style>
