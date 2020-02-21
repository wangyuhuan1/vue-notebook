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
      this.axios.get("https://music.aityp.com/top/playlist?cat=华语").then(res=>{
        this.playlists=res.data.playlists
      })
    }
}
</script>

<style scoped>
.container{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>