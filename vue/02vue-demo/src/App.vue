<template>
  <div id="app">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>

      <el-form-item label="年龄">
        <el-input v-model="formInline.age" placeholder="年龄"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">增加</el-button>
      </el-form-item>
      <div v-for="item of arr" :key="item.name">
        <p>{{item.name}}:{{item.age}}</p>
      </div>
    </el-form>
    <HomeTable :arr="arr"></HomeTable>
  </div>
</template>

<script>
import HomeTable from "./components/HomeTable";
export default {
  name: "app",
  data() {
    return {
      formInline: {
        name: "",
        age: ""
      },
      arr: [{ name: "李四", age: 20 }]
    };
  },
  components: {
    HomeTable
  },
  methods: {
    onSubmit() {
      this.arr.push(this.formInline);
    },
    handleDel(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
