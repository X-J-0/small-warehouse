<template>
<div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="user_id"
        label="id">
        </el-table-column>
        <el-table-column
        prop="user_name"
        label="用户名">
        </el-table-column>
        <el-table-column
        prop="user_password"
        label="密码">
        </el-table-column>
        <el-table-column
        prop="user_email"
        label="邮箱">
        </el-table-column>
        <el-table-column
        prop="action"
        label="操作">
            <template slot-scope="scope">
                <!-- <el-button size="small" @click="handleToFreeze(scope.$index,scope.row)">{{scope.row.isFreeze ? '已冻结' : '未冻结'}}</el-button> -->
                <el-button size="small" type="danger" @click="handleToDelete(scope.$index,scope.row.user_id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name:'users',
  data(){
   return {
       tableData:[]
   }
  },
  mounted(){
      this.axios({
      url:"/api/small/user",
      method:'get',
      crossdomain:true,
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
      },
      }).then(res => {
          if(res.data.status){
            this.tableData = res.data.data;
          }
          console.log(res);
      });
  },
  methods:{
      handleToDelete(index,row){
          this.axios({
            url:"/api/small/user/delete",
            method:'post',
            crossdomain:true,
            data:{
              user_id:row
            },
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
            },
        }).then(res => {
            console.log(res);
            this.tableData.splice(index,1);
      });
      }
  }
}

</script>

<style scoped>

</style>
