<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/films">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <p v-show="this.$store.state.isLoading">加载中</p>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1000px;
}

#nav {
  padding: 80px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
