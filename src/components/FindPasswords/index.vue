<template>
    <el-dialog title="修改密码" :visible.sync="$store.state.home.isShow" width="30%" top="11%" :close-on-click-modal="false" @close="handleClose">
    <div class="back">
    <el-input
    placeholder="密码"
    suffix-icon="el-icon-date"
    v-model="password"
    type="password"
    class="password_text">
    </el-input>
    <el-input
    placeholder="请再次输入密码"
    suffix-icon="el-icon-date"
    v-model="password_twice"
    type="password"
    class="password_text">
    </el-input>
    <div class="password_btn">
      <input type="button" value="修改" @click="handleToPassword">
    </div>
    <div class="password_link">
        <router-link to="/home/login">立即登录</router-link>
        <router-link to="/home/registers">立即注册</router-link>
    </div>
    </div>
    </el-dialog>
</template>

<script>
export default {
  name:'findPasswords',
  data(){
   return {
     password:'',
     password_twice:''
   }
  },
  methods:{
    handleClose(){
        this.$router.push({path:'/home'});
    },
    handleToPassword(){     
      console.log(this.$route.query.email);
      if(this.password != this.password_twice){
        this.$message({
            type: 'error',
            message:"两次密码输入不一致！"
        });
      }else{
      this.axios.post('/api/repassword',{
        user_password:this.password,
        user_mail:this.$route.query.email
      }).then((res)=>{
        console.log(res);
        var status = res.data.status;
        if(status){
          this.$message({
              type: 'success',
              message:"修改密码成功"
          });
          this.$router.push('/home/login');
        }else{
          this.$message({
              type: 'error',
              message:"修改密码失败"
          });
        }
      })
      }

    }
  }
}
</script>

<style scoped>
.back{
    height:220px;
}
.password_text{
    color:black;
    width:80%;
    height:40px;
    background:#fff;
    margin-bottom:15px;
    margin-left:10%; 
}
.password_btn{
    width:80%;
    height:50px;
    margin-left:10%;
    margin-top:20px;    
}
.password_btn input{
    width:100%;
    height:100%;
    background-color:rgb(17, 173, 212);
    border-radius: 3px;
    border:none;
    display:block;
    color:white;
    font-size:20px;
}
.password_link :nth-child(1){
    text-decoration: none;
    float:left;
    margin-top:10px;
    margin-left:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
.password_link :nth-child(2){
    text-decoration: none;
    float:right;
    margin-top:10px;
    margin-right:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
.password_email{
    position:relative
}
.password_email button{
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
