<template>
  <div id="app">
    姓名：<input type="text" v-model="name">
    年龄：<input type="text" v-model="age">
    <button @click="handleAdd(name,age)">添加</button>
    <home-table :data="arr" @deleteItem="handleToggle"></home-table>
  </div>
</template>

<script>
import HomeTable from './components/HomeTable'
export default {
  name: 'app',
  data(){
    return {
      name:"", 
      age:"",
      arr:[
        {name:"张三",age:19},
        {name:"李四",age:20},
      ]
    }
  },
  components:{
    HomeTable
  },
  methods:{
    handleAdd(){
      this.arr.push({
        name:this.name,
        age:this.age
      })
    },
    handleToggle(index){
      console.log(index)
    }
  }
}
</script>
