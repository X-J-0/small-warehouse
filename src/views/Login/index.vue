<template>
    <div class="content s--signup">
        <div class="sub-cont">
            <div class="img">
                <div class="img__text m--in">
                    <h2>已有帐号？</h2>
                    <p>有帐号就登录吧，等你好久啦！</p>
                </div>
            </div>
            <el-form :label-position="right" inline-message :model="registerForm" status-icon :rules="registerRules" ref="registerRuleForm" label-width="100px" class="demo-ruleForm">
            <div class="form sign-up">
                <h2 style="color:#343B3E;font-size:25px">重置密码</h2>
                <el-form-item prop="username" label="邮箱">
                      <el-input  v-model="registerForm.username"></el-input>
                      <el-button type="info" id="verify">发送验证码</el-button>  
                </el-form-item>
                 <el-form-item prop="password" label="验证码">
                      <el-input  v-model="registerForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item prop="realName" label="密码">
                      <el-input v-model="registerForm.realName"></el-input>
                </el-form-item>
                <el-form-item prop="groupId" label="确认密码">
                        <el-input v-model="registerForm.realName"></el-input>
                </el-form-item>
            </div>
            </el-form>
                <button type="button" class="submit button" @click="findPassword">确 定</button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    // 验证学号
    const checkStudentCode = (rule, value, callback) => {
      const reg = /^[0-9]+$/
      if (!value) {
        callback(new Error('请输入学号'))
      } else if (value !== '' && ! reg.test (value)) {
        callback(new Error('学号必须为数字'))
      } else if (value.length !== 8) {
        callback(new Error('学号必须是8位'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'right',
      groupLists:[],
      value: '',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        realName: '',
        password: '',
        groupId: ''
      },
      // 登录
      loginRules: {
        // 学号
        username: [
          { required: true, validator: checkStudentCode, trigger: 'blur' }
        ],
        // 密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      },
      // 注册
      registerRules:{
        // 学号
        username:[
          { required: true, validator: checkStudentCode, trigger: 'blur' }
        ],
        // 姓名 去掉空格
        realName:[
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        // 密码
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        // 组别
        groupId:[
          { required: true, message: '请选择组别', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    findPassword(){
      this.$http({
        url:'',
        method:'post',
        data:''
      }).then(res=>{

      })
    }
  }
}
</script>
<style scoped>
#verify{
    width:80px;
    height:40px;
    background-color: rgb(102,102,102);
}
.el-input{
  width:60%;
  margin:15px;
}
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    background: #ededed;
}

input, button {
    border: none;
    outline: none;
    background: none;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.tip {
    font-size: 20px;
    margin: 40px auto 50px;
    text-align: center;
}

.content {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 900px;
    height: 550px;
    margin: -300px 0 0 -450px;
    background: #fff;
}

.form {
    position: relative;
    right:40%;
    width: 640px;
    height: 100%;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
    padding: 50px 30px 0;
}

.sub-cont {
    overflow: hidden;
    position: absolute;
    left: 640px;
    top: 0;
    width: 900px;
    height: 100%;
    padding-left: 260px;
    background: #fff;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.content.s--signup .sub-cont {
    -webkit-transform: translate3d(-640px, 0, 0);
    transform: translate3d(-640px, 0, 0);
}

.button {
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 36px;
    border-radius: 30px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
}

.img {
    overflow: hidden;
    z-index: 2;
    position: absolute;
    right: 0;
    top: 0;
    width: 260px;
    height: 100%;
    padding-top: 360px;
}

.img:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 900px;
    height: 100%;
    /* background-image: url(../images/bg.jpg); */
    background-size: cover;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
}

.content.s--signup .img:before {
    -webkit-transform: translate3d(640px, 0, 0);
    transform: translate3d(640px, 0, 0);
}

.img__text {
    z-index: 2;
    position: absolute;
    left: 0px;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img__text h2 {
    margin-bottom: 10px;
    font-weight: normal;
}

.img__text p {
    font-size: 14px;
    line-height: 1.5;
}

.content.s--signup .img__text.m--up {
    -webkit-transform: translateX(520px);
    transform: translateX(520px);
}
.img__text.m--in {
    -webkit-transform: translateX(-520px);
    transform: translateX(-520px);
}

.content.s--signup .img__text.m--in {
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.img__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: 36px;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
}
.img__btn:after {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 30px;
}

.img__btn span {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: -webkit-transform 0.6s;
    transition: transform 0.6s;
    transition: transform 0.6s, -webkit-transform 0.6s;
}

.img__btn span.m--in {
    -webkit-transform: translateY(-72px);
    transform: translateY(-72px);
}

.content.s--signup .img__btn span.m--in {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}

.content.s--signup .img__btn span.m--up {
    -webkit-transform: translateY(72px);
    transform: translateY(72px);
}

h2 {
    width: 100%;
    font-size: 26px;
    text-align: center;
    /* color:#343B3E; */
}

label {
    display: block;
    width: 260px;
    margin: 25px auto 0;
    /* text-align: center; */
}

label span {
    font-size: 12px;
    color: #909399;
    text-transform: uppercase;
}

input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    /* text-align: center; */
}

/* .forgot-pass {
    margin-top: 15px;
    text-align: center;
    font-size: 12px;
    color: #cfcfcf;
}

.forgot-pass a {
    color: #cfcfcf;
} */

.submit {
    margin-top: 40px;
    position:relative;
    right:45%;
    margin-bottom: 20px;
    background: #666;
    text-transform: uppercase;
}

.fb-btn {
    border: 2px solid #d3dae9;
    color: #8fa1c7;
}
.fb-btn span {
    font-weight: bold;
    color: #455a81;
}

.sign-in {
    transition-timing-function: ease-out;
}
.content.s--signup .sign-in {
    transition-timing-function: ease-in-out;
    transition-duration: 0.6s;
    -webkit-transform: translate3d(640px, 0, 0);
    transform: translate3d(640px, 0, 0);
}

.sign-up {
    -webkit-transform: translate3d(-900px, 0, 0);
    transform: translate3d(-900px, 0, 0);
}
.content.s--signup .sign-up {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
</style>
