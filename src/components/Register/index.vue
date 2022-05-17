<template>
    <el-dialog title="注册" :visible.sync="$store.state.home.isShow" width="30%" top="11%" :close-on-click-modal="false" @close="handleClose">
    <div class="back">
    <el-input
    placeholder="用户名"
    suffix-icon="el-icon-date"
    v-model="username"
    class="register_text">
    </el-input>
    <el-input
    placeholder="密码"
    suffix-icon="el-icon-date"
    v-model="password"
    type="password"
    class="register_text">
    </el-input>
    <el-input
    placeholder="请再次输入密码"
    suffix-icon="el-icon-date"
    v-model="password_twice"
    type="password"
    class="register_text text1">
    </el-input>
    <div class="register_btn">
        <input type="submit" value="注册" @click="handleToRegister">
    </div>
    <div class="register_link">
        <router-link to="/home/login">立即登录</router-link>
        <router-link to="/home/findpassword">找回密码</router-link>
    </div>
    </div>
    </el-dialog>
</template>

<script>
export default {
    name:'register',
    data(){
    return {
        username:'',
        password:'',
        password_twice:''
    }
    },
    methods:{
    handleClose(){
        this.$router.push({path:'/home'});
    },
    handleToRegister(){
      this.axios({
          url:"/api/register",
          method:'post',
          crossdomain:true,
          data:{
            user_name:this.username,
            user_password:this.password,
            user_email:this.$route.query.email
          },
          headers:{
              'Content-Type':'application/json',
              'Authentication':window.sessionStorage.getItem('token')
          },
      }).then(res => {
          this.$message({
              type: 'success',
              message:"注册成功！"
          });
          this.$router.push({path:'/home/login'})
        });
    }
  }
}
</script>

<style scoped>
.back{
    height:250px;
}
.register_text{
    color:black;
    width:80%;
    height:40px;
    background:#fff;
    margin-bottom:15px;
    margin-left:10%; 
}
.register_btn{
    width:80%;
    height:50px;
    margin-left:10%;
    margin-top:10px;
}
.register_btn input{
    width:100%;
    height:100%;
    background-color:rgb(17, 173, 212);
    border-radius: 3px;
    border:none;
    display:block;
    color:white;
    font-size:20px;
}
.register_link :nth-child(1){
    text-decoration: none;
    float:left;
    margin-top:10px;
    margin-left:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
.register_link :nth-child(2){
    text-decoration: none;
    float:right;
    margin-top:10px;
    margin-right:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
.register_email{
    position:relative;
}
.register_email button{
    position:absolute;
    top:5px;
    right:45px;
    height:30px;
    background-color:rgb(17, 173, 212);
    border-radius: 3px;
    border:none;
    padding:5px;
    color:white;
}
</style>
