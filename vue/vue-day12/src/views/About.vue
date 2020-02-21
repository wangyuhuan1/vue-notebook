<template>
  <div class="about">
    <h1 class="nav" :style="{opacity:opacity}">This is an about page</h1>
    <!-- <p>{{this.$store.state.city}}</p> -->

    <div v-for="item of subjects" :key="item.id">
      <p>{{item.username}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      opacity:0,
      subjects:[]
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
    this.axios.get("http://localhost:8080/duitang").then(res=>{
      this.subjects=res.data
    })
  },
  methods:{
    handle(){
      var height=document.documentElement.scrollTop
      console.log(height)
      var opacity=height/300
      console.log(opacity)
      if(opacity>1){
        opacity=1
      }
      this.opacity=opacity
    },
    destroyed() {
      window.removeEventListener("scroll",this.handle)
    },
  }
}
</script>
<style scoped>
  .nav{
    width:100%;
    height:40px;
    background: red;
    position: fixed;
    top:0;
    left:0
  }
</style>
