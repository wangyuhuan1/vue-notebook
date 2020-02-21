<template>
  <div id="app">
    <div id="nav">
      <router-link to="/music">音乐</router-link>
      <router-link to="/mv">MV</router-link>
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
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  // font-size: 30px;
}
</style>
