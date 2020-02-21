<template>
  <div class="item" @click="handleDetail(data.id)">
      <img :src="data.coverImgUrl" alt="">
      <p>{{data.name | format()}}</p>
  </div>
</template>

<script>
export default {
    name:"Item",
    props:{
        data:{
            type:Object,
            required:true
        }
    }, 
    methods:{
        handleDetail(id){
            console.log(id)
            this.$router.push(`/detail?id=${id}`)
        }
    }
}
</script>

<style>
img{
    width:250px;
    height:250px
}
.item{
    width:220px
}
</style>