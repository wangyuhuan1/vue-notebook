<template>
  <div class="films">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <router-link to="/detail">
      <p>{{city}}</p>
    </router-link>
    <div>
      <router-link to="/films/nowPlaying">正在热映</router-link>
      <router-link to="/films/comingSoon">即将上映</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "films",
  mounted() {
    console.log(this.$store.state.city);
  },
  computed: {
    city() {
      return this.$store.state.city;
    }
  }
};
</script>
