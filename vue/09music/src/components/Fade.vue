<template>
  <transition>
      <slot name="fade"></slot>
  </transition>
</template>

<script>
export default {
    name:"Fade"
}
</script>

<style scoped>
.v-leave-active,.v-enter-active{
  transition:opacity 4s;
}
.v-leave-to,.v-enter{
  opacity: 0;
}
</style>