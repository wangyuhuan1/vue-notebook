<template>
  <div @click="handleAdd">{{data}}</div>
</template>

<script>
export default {
    props:{
        data:Number,
        // require:true
    },
    methods:{
        handleAdd(){
            this.$emit("add")
        }
    }
}
</script>

<style scoped>

</style>