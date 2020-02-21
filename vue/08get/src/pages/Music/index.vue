<template>
  <div>
      music
      <p>{{"hello world" | format()}}</p>

  </div>
</template>

<script>
export default {
    name:"Music",
    // filters:{
    //     format(val){
    //         if(val.length>6){
    //             val=val.slice(0,6)+"..."
    //         }
    //         return val
    //     }
    // }
}
</script>

<style>

</style>