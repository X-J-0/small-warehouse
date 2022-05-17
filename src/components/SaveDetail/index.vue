<template>
    <el-dialog
    title="存放物品"
    :visible.sync="$store.state.save.isDisplay"
    width="30%">
    <div>
        请选择商品分类：
        <el-radio-group fill="#FF7F50" v-model="radio">
        <el-radio-button label="食品"></el-radio-button>
        <el-radio-button label="百货"></el-radio-button>
        <el-radio-button label="生活用品"></el-radio-button>
        </el-radio-group>
    </div>
    <el-input v-model="name" class="name" placeholder="请输入商品名称"></el-input>
    <el-input v-model="number" class="numbers" placeholder="请输入存放数量" type="number"></el-input>
    <el-input
    type="textarea"
    autosize
    placeholder="请输入物品信息"
    v-model="item_information"
    class="item_information">
    </el-input>
    <el-upload
    class="upload-demo"
    action="/api/pic"
    name="imgfile"
    show-file-list="true"
    list-type="picture">
    <el-button size="small" type="primary" class="button2">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <span slot="footer" class="dialog-footer">
        <el-button @click="$store.state.save.isDisplay = false" class="button1">取 消</el-button>
        <el-button type="primary" @click="handleSaved" class="button2">确 定</el-button>
    </span>
    </el-dialog>

</template>

<script>
export default {
  name:'',
  data(){
   return {
       name:'',
       radio:'食品',
       number:'',
       item_information:''
   }
  },
  mounted(){
    console.log(this.$store.state.save.item_id);
  },
  methods:{
      handleToCancel(){
          this.$store.commit('save/CHANGE_COVER',{isDisplay:false});
      },
      handleSaved(){
      this.axios({
      url:"/api/small/goods",
      method:'post',
      crossdomain:true,
      data:{
        good_type:this.radio,
        good_name:this.name,
        good_number:parseInt(this.number),
        good_message:this.item_information,
        good_status:'1',
        house_id:this.$store.state.save.item_id
      },
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
      },
      }).then(res => {
          if(res.data.status){
            this.$message({
              type: 'success',
              message: '订单信息已保存，正在前往购物车支付···'
            });
            setTimeout(()=>{
              this.$router.push({path:'/order'});
            },1000);
            this.$store.commit('save/CHANGE_COVER',{isDisplay:false});
          }
          else{
            this.$message({
              type: 'error',
              message: '存储失败'
            });
          }
      });
      }
  }
}
</script>

<style scoped>
.cover{
    position: absolute;
    top:0;
    width:100%;
    height:752px;
    background-color: #000;
    opacity: 0.6;
}

.form{
    width:400px;
    height:350px;
    background-color: #fff;
    position:absolute;
    top:28%;
    left:35%;
    border-radius:2%;
}
.name,.numbers,.item_information{
    margin-top:10px;
    margin-bottom:10px;
}
.button1:hover{
    border:#FF7F50;
    color:#FF7F50;
}
.button2{
    background-color:#FF7F50;
    color:white;
    border:none
}
</style>
