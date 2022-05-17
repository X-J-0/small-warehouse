<template>
<div>
  <el-menu :default-active="activeIndex" 
  class="el-menu-demo" 
  mode="horizontal">
  <el-menu-item index="1" class="line">首页</el-menu-item>
  <el-menu-item index="2" @click = "handleToSave">存储货物</el-menu-item>
  <el-menu-item index="3" @click = "handleToExtract">提取货物</el-menu-item>
  <el-menu-item index="4" @click = "handleToShowLogin">登录</el-menu-item>
  <el-menu-item index="5" class="unique">
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
        用户<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native = "handleToShowLogout">退出</el-dropdown-item>
        <el-dropdown-item :disabled="$store.state.admin.isAdmin?false:true" @click.native = "handleToManger">进入后台管理系统</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import SearchInfo from '../SearchInfo';
export default {
    name:'Header',
    components:{
        SearchInfo
    },
    data:{
        activeIndex: '1',
        activeIndex2: '1'
    },
    methods:{
        handleToShowLogin(){
            this.$router.push({path:'/home/login'});
            this.$store.commit('home/CHANGE_SHOW',{isShow:true});
        },
        handleToSave(){
            this.$router.push({path:'/save'})
        },
        handleToExtract(){
            this.$router.push({path:'/extract'});
        },
        handleToShowLogout(){
            this.$store.commit('home/SET_TOKEN',{token:''});
            this.$message({
                type: 'success',
                message:"退出成功"
            });
        },
        handleToManger(){
            this.$router.push({path:'/admin'});
        }
    }
}
</script>

<style scoped>
.header-box{
    position:relative;
    background-color:#000;
    opacity: 0.6;
    width:80%;
    height:50px;
    top:20px;
    margin:0 100px;
}
.header-box ul{
    line-height: 50px;
}
.header-box ul li{
    color:white;
    float:right;
    list-style-type: none;
    margin-right:25px;
    font-size: 18px;
    cursor: pointer;
}
.line{
    margin-left:50px;
}
li:hover{    
    color:rgb(233, 93, 50);
}
.search_text{
    width:100%;
    height:250px;
    background-color: rgb(247, 249, 250);
    position: absolute;
    top:50px;
    border:none;
}
.fade-enter-active, .fade-leave-active {
  transition: top .2s;
}
.fade-enter, .fade-leave-to{
  top: 0;
}
.el-dropdown-link {
cursor: pointer;
color: #409EFF;
}
.el-icon-arrow-down {
font-size: 12px;
}
.unique{
    float:right;
}
</style>