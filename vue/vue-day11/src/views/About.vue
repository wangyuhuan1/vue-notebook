<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      msg: "hello world"
    };
  },
  beforeCreate() {
    console.log(this.msg);
    console.log("组件被创建之前");
  },
  created() {
    console.log(this.msg);
    console.log(this.$refs.dom);
    console.log("组件已经被创建好了");
  },
  /* 组件被装载到真实DOM元素之前 */
  beforeMount() {
    console.log("组件被装载之前");
  },
  mounted() {
    console.log(this.$refs.dom);
    console.log("组件被装载到DOM上");
    window.addEventListener("scroll", this.go);
  },
  /* data的数据更新,update生命周期函数会触发 */
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("组件销毁之前");
  },
  destroyed() {
    window.removeEventListener("scroll", this.go);
    console.log("组件销毁的时候");
  }
};
</script>