<template>
  <div class="home">
    <transition>
      <p v-if="isShow">hello world</p>
    </transition>
    <button @click="handleClick">隐藏</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'home',
  data(){
    return{
      isShow:true
    }
  },
  mounted(){
    axios.get("/cart").then(res=>{
      console.log(res)
    })
  },
  methods:{
    handleClick(){
      this.isShow=!this.isShow
    }
  }
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