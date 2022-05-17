<template>
    <div class="cover" v-if="$store.state.admin.isChange">
        <input v-model = "name" class="name" placeholder="修改仓库名"/>
        <input v-model = "number" class="numbers"  placeholder="修改仓库价格"/>
        <input v-model = "item_information" class="item_information" placeholder="修改仓库大小"/>
        <el-upload
        class="upload-demo"
        action="/api/pic"
        name="imgfile"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <button class="button2" @click="handleToSubmit">提交</button>
        <button class="button1" @click="handleToCancel">取消</button>
    </div>
</template>

<script>
import { uploadImgToBase64 } from '../../../utils';
export default {
  name:'',
  props:['list'],
  data(){
   return {
       name:'',
       number:'',
       item_information:'',
       file:''
   }
  },
  methods:{
    uploadPhoto (e) {
        // 利用fileReader对象获取file
        var file = e.target.files[0];
        var filesize = file.size;
        var filename = file.name;
        // 2,621,440   2M
        if (filesize > 2101440) {
            // 图片大于2MB
    
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
    
            // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
            var imgcode = e.target.result;
            this.file = imgcode
            console.log(this.file);
        }
    },
      handleToSubmit(){
        this.axios({
            url:"/api/small/house",
            method:'put',
            crossdomain:true,
            data:{
              house_name:this.name,
              house_price:this.number,
              house_size:this.item_information,
              house_id:this.$store.state.admin._id
            },
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
            },
        }).then(res => {
            console.log(res);
              var status = res.data.status;
              var That = this;

        });
      },
      handleToCancel(){

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
.name{
    border:none;
    border-bottom: 1px solid black;
}
.numbers{
    border:none;
    border-bottom: 1px solid black;
}
.img{
    width:100px;
    height:100px;
}
.item_information{
    border:none;
    border-bottom: 1px solid black;
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

</style>
