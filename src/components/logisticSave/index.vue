<template>
    <el-dialog
    title="添加仓库"
    :visible.sync="$store.state.admin.isSaveShow"
    width="30%"
    center>
    <el-input v-model="name" class="name" placeholder="请输入仓库名"></el-input>
    <el-input type="number" v-model="number" class="numbers" placeholder="请输入仓库价格"></el-input>
    <el-input type="number" v-model="item_information" class="item_information" placeholder="请输入仓库大小"></el-input>
    <el-upload
    class="upload-demo"
    action="/api/pic"
    name="imgfile"
    show-file-list="true"
    list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleToCancel">取 消</el-button>
        <el-button type="primary" @click="handleToSubmit">确 定</el-button>
    </span>
    </el-dialog>
</template>

<script>
import { uploadImgToBase64 } from '../../../utils';
export default {
  name:'LogisticSave',
  data(){
   return {
       name:'',
       number:'',
       item_information:'',
       file:'',
       imageUrl: '',
       fileList:[]
   }
  },
  methods:{
      handleToSubmit(){
        this.axios({
            url:"/api/small/house",
            method:'post',
            crossdomain:true,
            data:{
              house_name:this.name,
              house_price:this.number,
              house_size:this.item_information,
              house_status:1
            },
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
            },
        }).then(res => {
            console.log(res);
              var status = res.data.status;
              if(status){
                this.$message({
                    type: 'success',
                    message:"添加成功"
                });
                this.$store.commit('admin/CHANGE_ISSAVECHANGE',{isSaveShow:false});
              }
              else{
                this.$message({
                    type: 'error',
                    message:"添加失败"
                });
              }
        });
      },
      handleToCancel(){
          this.$store.commit('admin/CHANGE_ISSAVECHANGE',{isSaveShow:false})
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
}
</script>

<style scoped>
.cover{
    position: absolute;
    top:0;
    width:85%;
    height:300px;
    background-color: rgb(233,238,243);
    float:right;
}
input{
  width:80%;
  margin:10px auto;
  height:40px;
  background-color:transparent;
  display:block;
}
.name,.item_information,.numbers{
    margin-top:10px;
    margin-bottom: 10px;
}
.img{
    width:100px;
    height:100px;
}
.button1,.button2{
    width:80px;
    height:40px;
    float:right;
}
.button1{
    border:1px solid black;
    background-color: #fff;
    margin-right:3%;
}
.button2{
    background-color: rgb(41, 142, 243);
    margin-right:10%;
    color:white;
}
.avatar-uploader .el-upload {
    border: 1px solid grey;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
