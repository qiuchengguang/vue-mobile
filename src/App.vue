<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import "./assets/less/mixins/mixins.less"; 
body {
  background-color: #fbf9fe;
}
</style>
