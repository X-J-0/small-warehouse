<template>
    <el-dialog title="找回密码" :visible.sync="$store.state.home.isShow" width="30%" top="11%" :close-on-click-modal="false" @close="handleClose">
    <div class="back">
    <div class="registers_email">
      <el-input v-model="email" class="registers_text" placeHolder="请输入您的邮箱"></el-input><button :disabled="disabled" @click="handleToVerify">发送验证码</button>
    </div>
    <el-input
    placeholder="验证码"
    suffix-icon="el-icon-date"
    v-model="verify"
    class="registers_text">
    </el-input>
    <div class="registers_btn">
      <input type="button" value="确定" @click="handleToPassword">
    </div>
    <div class="registers_link">
        <router-link to="/home/login">立即登录</router-link>
    </div>
    </div>
    </el-dialog>
</template>

<script>
export default {
  name:'registers',
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
        this.axios({
            url:"/api/mailregister",
            method:'post',
            crossdomain:true,
            data:JSON.stringify({
              user_email:this.email
            }),
            headers:{
                'Content-Type':'application/json',
                'Authentication':window.sessionStorage.getItem('token')
            },
        }).then(res => {
          if(res.data.status){
            this.$message({
                type: 'success',
                message:"验证码发送成功"
            });
          }
        });
    },
    handleToPassword(){
      this.axios({
          url:"/api/trueregister",
          method:'post',
          crossdomain:true,
          data:JSON.stringify({
            mail_mail:this.email,
            mail_rind:this.verify
          }),
          headers:{
              'Content-Type':'application/json',
              'Authentication':window.sessionStorage.getItem('token')
          },
      }).then(res => {
          if(res.data.status){
            this.$router.push({path:'/home/register',query:{email:this.email}});
          }else{
          this.$message({
              type: 'error',
              message:"验证码错误"
          });
        }
      });
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
.registers_text{
    color:black;
    width:80%;
    height:40px;
    background:#fff;
    margin-bottom:15px;
    margin-left:10%; 
}
.registers_btn{
    width:80%;
    height:50px;
    margin-left:10%;
    margin-top:15px;    
}
.registers_btn input{
    width:100%;
    height:100%;
    background-color:rgb(17, 173, 212);
    border-radius: 3px;
    border:none;
    display:block;
    color:white;
    font-size:20px;
}
.registers_link :nth-child(1){
    text-decoration: none;
    margin-top:10px;
    margin-left:10%;
    font-size:12px;
    color:rgb(17, 173, 212);
}
.registers_email{
    position:relative
}
.registers_email button{
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
