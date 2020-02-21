<template>
  <div>
      <h2>城市列表页</h2>
      <router-link @click.native="handleClick(item)" to="/" v-for="item of cities" :key="item" tag="button">
      {{item}}
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cities:["上海","北京","深圳","广州"]
        }
    },
    methods:{
        handleClick(city){
            this.$store.dispatch("changeCity",city)
        }
    }
}
</script>

<style scoped>

</style>