<template>
  <div id="app">
    <div id="nav">
      <router-link to="/music">音乐<i class="iconfont">&#xe680;</i></router-link>
      <router-link to="/mv">MV<i class="iconfont">&#xe637;</i></router-link>
      <router-link to="/all">all</router-link>
    </div>
    <router-view></router-view>
    <bs-btn></bs-btn>
  </div>
</template>

<script>
import BsBtn from "./components/BsBtn";
export default {
  name: "app",
  components: {
    BsBtn
  }
};
</script>

<style lang="less">
#app #nav .router-link-active {
  color: blue;
  margin-left: auto;
  margin-right: auto;
}
#app {
  width:10rem;
  margin-left: auto;
  margin-right: auto;
  // position: relative;
}
</style>
