<template>
  <div>
    个人中心
    <router-link to="/detail/23654" tag="button">跳转到detail</router-link>
    <button @click="toggle">toggle</button>
    <keep-alive>
      <component :is="isToggle?one:two"></component>
    </keep-alive>
  </div>
</template>

<script>
import One from "../components/One.vue";
import Two from "../components/Two.vue";
export default {
  data() {
    return {
      one: "One",
      two: "Two",
      isToggle: true
    };
  },
  mounted() {
    console.log("https请求");
  },

  components: {
    One,
    Two
  },
  methods: {
    toggle() {
      this.isToggle = true;
    }
  }
};
</script>

<style scoped>
</style>