<template>
    <el-dialog title="登录" :visible.sync="$store.state.home.isShow" width="30%" top="11%" :close-on-click-modal="false" @close="handleClose">
    <div class="back">
    <el-input
    placeholder="用户名"
    suffix-icon="el-icon-date"
    v-model="username"
    class="login_text text">
    </el-input>
    <el-input
    placeholder="密码"
    suffix-icon="el-icon-date"
    v-model="password"
    type="password"
    class="login_text text1">
    </el-input>
    <div class="login_btn">
        <input type="submit" value="登录" @click="handleToLogin">
    </div>
    <div class="login_link">
        <router-link to="/home/registers" class="register">立即注册</router-link>
        <router-link to="/home/findpassword" class="password">找回密码</router-link>
    </div>
    </div>
    </el-dialog>
</template>

<script>
import axios from 'axios';
export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
    handleClose(){
        this.$router.push({path:'/home'});
    },
    handleToLogin(){
        this.axios.post('/api/index',{
            user_name:this.username,
            user_password:this.password
        }).then((res)=>{
            console.log(res);
            var status = res.data.status;
            if(status){
                this.$message({
                    type: 'success',
                    message:"登录成功"
                });
                this.$router.push({ path: '/home'});
                this.$store.commit('home/SET_TOKEN',{token:res.data.token});
                if(res.data.ok == 1){
                    this.$store.commit('admin/CHANGE_IDENTIFY',{isAdmin:false});
                    this.$router.push({path:'/home'});
                }else{
                    this.$store.commit('admin/CHANGE_IDENTIFY',{isAdmin:true}); 
                }
            }else{
                this.$message({
                    type: 'error',
                    message:"登录失败"
                });
            }
        })
    }
  }
}
</script>

<style scoped>
.back{
    height:220px;
}
.login_text{
    color:black;
    width:80%;
    height:40px;
    background:#fff;
    margin-bottom:15px;
    margin-left:10%; 
}
.login_btn{
    width:80%;
    height:50px;
    margin-left:10%;
    margin-top:20px;
}
.login_btn input{
    width:100%;
    height:100%;
    background-color:rgb(17, 173, 212);
    border-radius: 3px;
    border:none;
    display:block;
    color:white;
    font-size:20px;
}
.register{
    text-decoration: none;
    float:left;
    margin-top:10px;
    margin-left:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
.password{
    text-decoration: none;
    float:right;
    margin-top:10px;
    margin-right:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
</style>