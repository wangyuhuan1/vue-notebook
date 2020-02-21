<template>
  <div>

    <el-table :data="arr" style="width: 100%">
      <el-table-column type="index" label="编号" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDel(scope.$index,arr)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name:"HomeTable",
  props:{
    arr:{
      type:Array
    }
  }
}
</script>