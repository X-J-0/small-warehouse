<template>
    <el-dialog title="找回密码" :visible.sync="$store.state.home.isShow" width="30%" top="11%" :close-on-click-modal="false" @close="handleClose">
    <div class="back">
    <div class="password_email">
      <el-input v-model="email" class="password_text" placeHolder="请输入您的邮箱"></el-input><button :disabled="disabled" @click="handleToVerify">发送验证码</button>
    </div>
    <el-input
    placeholder="验证码"
    suffix-icon="el-icon-date"
    v-model="verify"
    class="password_text">
    </el-input>
    <div class="password_btn">
      <input type="button" value="确定" @click="handleToPassword">
    </div>
    <div class="password_link">
        <router-link to="/home/login">立即登录</router-link>
    </div>
    </div>
    </el-dialog>
</template>

<script>
export default {
  name:'findPassword',
  data(){
   return {
     email:'',
     verify:'',
     disabled:false
   }
  },
  methods:{
    handleClose(){
        this.$router.push({path:'/home'});
    },
    handleToVerify(){
      if(this.disabled){
        return;
      }
     this.axios.post('/api/mailregister',{
        user_email:this.email
     }).then((res)=>{
        var status = res.data.status;
        var This = this;
        if(status){
            this.$message({
                type: 'success',
                message:"验证码发送成功"
            });
            this.countDown();
        }else{
            this.$message({
                type: 'error',
                message:"验证码发送失败"
            });
        }
     })
    },
    handleToPassword(){
      this.axios.post('/api/trueregister',{
        user_email:this.email,
        mail_rind:this.verify
      }).then((res)=>{
        console.log(res.data.status);
        var status = res.data.status;
        if(status){
          this.$router.push({path:'/home/findpasswords',query:{email:this.email}});
        }else{
          alert("验证码错误");
        }
      })
    },
    countDown(){
      this.disabled = true;
      var count = 60;
      var timer = setInterval(()=>{
        count--;
        this.verifyinfo = '剩余' + count + '秒';
        if(count === 0){
          this.disabled = false;
          count = 60;
          this.verifyinfo = '发送验证码';
          clearInterval(timer);
        }
      },1000);
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
    float:left;
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
