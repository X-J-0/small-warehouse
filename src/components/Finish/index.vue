<template>
<div>
        <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <!-- <el-table-column
        label="仓库图片">
        　　<template slot-scope="scope">
　　　　      <img :src="'http://' + scope.row.house_pic" width="80px" height="120px"/>
        　　</template>
        </el-table-column> -->
        <el-table-column
        prop="house_name"
        label="仓库名">
        </el-table-column>
        <el-table-column
        prop="good_name"
        label="物品名">
        </el-table-column>
        <el-table-column
        prop="good_number"
        label="存放数量">
        </el-table-column>
        <el-table-column
        prop="good_type"
        label="所属分类">
        </el-table-column>
        <el-table-column
        prop="good_price"
        label="金额/元">
        </el-table-column>
        <el-table-column
        label="状态">        
        <template slot-scope="scope">
        <!-- <el-button type="warning" v-if="scope.row.orderStatus" plain>未支付</el-button> -->
        <el-button type="primary" v-if="scope.row.orderStatus" plain>已完成</el-button>
        </template>
        </el-table-column>
        </el-table>
        <el-pagination
        background
        :page-size=5
        :hide-on-single-page=true
        :total=7
        @current-change="handleToChangeSize">
        </el-pagination>
</div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
        tableData: [{
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:true,
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:true,
        },{
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:true,
        }],
        multipleSelection: []
   }
  },
  methods:{
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
        },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection);
      },
      handleToChangeSize(val){
            this.axios({
            url:"",
            method:'post',
            crossdomain:true,
            data:{
              page:val
            },
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
            },
        }).then(res => {
            console.log(res);
              var status = res.data.status;
              if(status){
                this.tableData = res.data.data.tableData;
              }              
        });
      }
  }
}
</script>

<style scoped>

</style>
