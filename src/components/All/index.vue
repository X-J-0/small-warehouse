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
        label="存放天数">        
        <template slot-scope="scope">
        <el-input-number :step=1 size="small" v-model="scope.row.count" @change="handleChange(scope.row.count)" :min="1" label="描述文字"></el-input-number>
        </template>
        </el-table-column>
        <el-table-column
        label="状态">        
        <template slot-scope="scope">
        <el-button type="warning" v-if="scope.row.orderStatus" plain>未支付</el-button>
        <el-button type="primary" v-if="!scope.row.orderStatus" plain>已完成</el-button>
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
        <div class="kind">
            <span class="sum">合计：￥{{sum}}</span>
            <el-button type="primary" @click="handleToSettle">结算</el-button>
        </div>
        
</div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
        count:'',
        tableData: [{
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:true,
          count:1
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:true,
          count:1
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:false,
          count:1
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:false,
          count:1
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:false,
          count:1
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:false,
          count:1
        }, {
          house_name: 'oo',
          good_name: '牙刷',
          good_number: '100',
          good_type:"生活用品",
          good_price:250,
          orderStatus:true,
          count:1
        }],
        multipleSelection: [],
        sum:0
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
        const checked = this.multipleSelection;
        this.sum = 0;
          for(let pre in checked){
              this.sum += checked[pre].count*checked[pre].good_price;
          }
      },
      handleChange(count){
          console.log(count);
      },
      handleToSettle(){
          for(let pre in this.multipleSelection){
              if(!this.multipleSelection[pre][orderStatus]){
                  this.$message({
                      message:'包含已结算过的订单！',
                      type:'warning'
                  })
              }
          }
      },
      handleToChangeSize(val){
          
      }
  }
}
</script>

<style scoped>
.kind{
    float:right;
    margin-right:5%;
}
.sum{
    margin-right:5%;
}
</style>
