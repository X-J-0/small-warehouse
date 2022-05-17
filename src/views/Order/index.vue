<template>
<el-container>
  <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click = "handleToIndex">首页</el-menu-item>
        <el-menu-item index="1" @click = "handleToSave">存储货物</el-menu-item>
        <el-menu-item index="1" @click = "handleToExtract">提取货物</el-menu-item>
        </el-menu>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <el-row class="tac">
        <el-col :span="1">
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            >
            <el-menu-item index="1" @click="handleToAll">
                <i class="el-icon-menu"></i>
                <span slot="title">全部订单</span>
            </el-menu-item>
            <el-menu-item index="2" @click="handleToUnpaid">
                <i class="el-icon-document"></i>
                <span slot="title">待支付</span>
            </el-menu-item>
            <el-menu-item index="3" @click="handleToFinish">
                <i class="el-icon-setting"></i>
                <span slot="title">已完成</span>
            </el-menu-item>
            </el-menu>
        </el-col>
        </el-row>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import All from '../../components/All';
export default {
  name:'All',
  components:{
      All
  },
  data(){
   return {
   }
  },
  methods:{
      handleToAll(){
          this.$router.push({path:'/order'})
      },
      handleToUnpaid(){
          this.$router.push({path:'/order/unpaid'});
      },
      handleToFinish(){
          this.$router.push({path:'/order/finish'});
      },
      handleToSave(){
          this.$router.push({path:'/save'})
      },
      handleToExtract(){
          this.$router.push({path:'/extract'});
      },
      handleToIndex(){
        this.$router.push({path:'/home'});
      }
  },
}
</script>

<style scoped>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    text-align: center;
    color: #333;
  }
  .el-main {
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } 
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
