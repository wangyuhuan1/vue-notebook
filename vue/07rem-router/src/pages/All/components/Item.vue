<template>
  <div class="item">
      <img :src="data.coverImgUrl" alt="">
      <p>{{data.name}}</p>
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
    }
}
</script>

<style>
img{
    width:250px;
    height:300rpx
}
.item{
    width:250px
}
</style>