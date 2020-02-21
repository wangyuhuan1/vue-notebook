<template>
  <div class="home">
    <h4>{{count}}</h4>
    <count :data="count" @add="handleAdd"></count>
    <test :data.sync="count"></test>
    <button @click="toggle">切换</button>
    <Dialog v-show="isShow" @del="handleDelete"></Dialog>
  </div>
</template>

<script>
import Test from '@/components/Test.vue'
import Count from '@/components/Count.vue'
import Dialog from '@/components/Dialog.vue'
export default {
  name: 'home', 
  data(){
    return{
      count:10,
      isShow:false
    }
  },
  components:{
    Count,
    Test,
    Dialog
  },
  methods:{
    handleAdd(){
      this.count++
    },
    toggle(){
      this.isShow=!this.isShow
    },
    handleDelete(){
      this.isShow=false
    }
  }
}
</script>
