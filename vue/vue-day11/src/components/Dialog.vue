<template>
  <div class="container">
    <div class="bg">
        <h2>标题</h2>
        <button @click="handleDelete">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  methods:{
      handleDelete(){
          this.$emit("del")
      }
  }
};
</script>

<style scoped>
.bg {
  background: rgb(78, 78, 78,.6);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>