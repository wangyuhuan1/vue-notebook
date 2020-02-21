<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// import data from './data'
import {a,b} from './data'
export default {
  name:"about",
  mounted(){
    this.axios.get("https://music.aityp.com/top/playlist").then(res=>{
      console.log(res)
    }),
    // console.log(data)
    console.log(a)
    console.log(b)
  }
}
</script>
