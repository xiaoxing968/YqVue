<template>
  <div class="container-header" :style="{height: height + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixins from "../mixins/layoutMixins"
export default {
  name: 'WHeader',
  mixins:[layoutMixins],
  mounted() {
    this.fatherDetermine()
  },
}
</script>

<style scoped lang="less">
.container-header {}
</style>