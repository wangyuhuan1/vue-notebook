<template>
  <div class="about" >
    <h1 ref="dom">This is an about page</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:"hello world"
    }
  },
  beforeCreate(){
    console.log(this.msg)
    console.log("组件被创建之前")
  },
  created(){
    console.log(this.msg)
    console.log(this.$refs.dom)
    console.log("组件已经被创建好了")
  },
  beforeMount(){
    console.log("组件被装载之前")
  },
  mounted(){
    console.log(this.$refs.dom)
    console.log("组件被装载到DOM上")
    window.addEventListener("scroll",this.go)
  },
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  update(){  
    console.log("updated")
  },
  beforeDestroy(){
    console.log("组件销毁之前")
  },
  destroyed(){
    window.removeEventListener("scroll",this.go)
    console.log("组件销毁的时候")
  },
  methods:{
    go(){
      console.log(1)
    }
  }
}
</script>
