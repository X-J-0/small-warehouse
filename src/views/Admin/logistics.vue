<template>
<div>
    <el-button type="primary" @click = 'handleToAdd()' class="add">添加仓库</el-button>
    <el-table
        fit="true"
        :data="tableData"
        highlight-current-row="true"
        style="width: 100%">
        <el-table-column
        label="仓库图片"
        >
        　　<template slot-scope="scope">
　　　　      <img :src="'http://' + scope.row.house_pic" width="80px" height="120px"/>
        　　</template>
        </el-table-column>
        <el-table-column
        prop="house_name"
        label="仓库名">
        </el-table-column>
        <el-table-column
        prop="house_price"
        label="仓库价格">
        </el-table-column>
        <el-table-column
        prop="house_size"
        label="仓库大小">
        </el-table-column>
        <el-table-column
        prop="action"
        label="操作">
        <template slot-scope="scope">
            <el-button size="small" @click="handleToChanges(scope.$index,scope.row.house_id)">修改信息</el-button>
            <el-button size="small" type="danger" @click="handleToDeletes(scope.$index,scope.row.house_id)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
    <ChangeDetail v-if="$store.state.admin.isChange" list="tableData"></ChangeDetail>
    <LogisticSave v-if="$store.state.admin.isSaveShow"></LogisticSave>
</div>
</template>

<script>
import LogisticSave from '../../components/logisticSave';
import ChangeDetail from '../../components/ChangeDetail';
import axios from 'axios';
export default {
  name:'users',
  components:{
    ChangeDetail,
    LogisticSave
  },
  data(){
   return {
        tableData: [],
   }
  },
  mounted(){
      this.axios({
      url:"/api/small/house",
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
      handleToAdd(){
          this.$store.commit('admin/CHANGE_ISSAVECHANGE',{isSaveShow:true});
      },
      handleToChanges(index,row){
          this.$store.commit('admin/CHANGE_ISCHANGE',{isChange:true});
          this.$store.commit('admin/CHANGE_INDEX',{_index:index});
          this.$store.commit('admin/CHANGE_ID',{_id:row});
      },
      handleToDeletes(index,row){
        console.log(typeof(row));
          this.axios({
            url:"/api/small/house/delete",
            method:'post',
            crossdomain:true,
            data:{
              house_id:row
            },
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
            },
        }).then(res => {
            console.log(res);
              var status = res.data.status;
              if(status){
                this.tableData.splice(index,1);
              }
              
        });
      }
  }
}
</script>

<style scoped>
.userHead{
  width:50px;
  height:50px;
  border-radius: 50%;
  overflow:hidden;
}
.search-box{
    width:100%;
    height:200px;
    position:relative;
}
.search-body :nth-child(1){
    margin-top: 100px;
    margin-left:230px;
}
.search_text{
    width:60%;
    height:40px;
    color:rgb(14, 2, 2);
    font-size: 20px;
    background-color:transparent;
    border:none;
    border-bottom:1px rgb(14, 2, 2) solid;
    outline:none;
    text-indent:10px;
}
input::-webkit-input-placeholder{
    color:rgb(5, 5, 5);
    font-size:16px;
}
i{
    color:rgb(10, 1, 1);
    font-size: 24px;
    margin-left:-40px;
}
i:hover{
    color:rgb(240, 94, 10);
}
.add{
  margin-right:10px;
  margin-bottom:10px;
  background-color:rgb(179,192,209);
  border:none;
  float:right;
}
</style>
