<template>
  <div class="container">
      <item :data="value" v-for="value of playlists" :key="value.id"></item>
  </div>
</template>

<script>
import Item from './components/Item'
export default {
    name:"all",
    data(){
      return {
        playlists:[]
      }
    },
    components:{
      Item
    },
    mounted(){
      this.axios.get("http://192.168.14.49:5000/top/playlist").then(res=>{
        this.playlists=res.data.playlists
      })
    }
}
</script>

<style>
.container{
  width:750px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>