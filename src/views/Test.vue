<template>
  <div id="test">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button type="primary" @click="info">点我查询</el-button>
    </el-row>

    <el-table
      :data="responedata"
      style="width: 100%, margin: auto" >
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="fullname"
        label="全名">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
//const axios = require('axios')

export default {
  name: "Test",
  data() {
    return {
      msg: "后台数据库查询",
      responedata: [],  
      tableData: [{
            "date": "2016-05-02",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
          }]
    };
  },
  methods: {
    info() {
      //this.$message('hello message');
      /*
       axios.get('?id=1')
         .then(function(response){
           console.log(response);
         })
         .catch(function(error) {
           console.log(error);
         })
      */
      this.$axios.get("http://192.168.3.72:5000?id=3").then(res => {
        this.responedata = res.data;  
        console.log(this.responedata);
        console.log(this.tableData);
      });
    }
  }
};
</script>
