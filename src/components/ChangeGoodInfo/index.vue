<template>
      <div class="cover" v-if="$store.state.extract.isDisplays">
        <div class="form">
        <div class="kind">
            请选择商品分类：
            <el-radio-group fill="#FF8C00" v-model="radio">
            <el-radio-button label="食品"></el-radio-button>
            <el-radio-button label="百货"></el-radio-button>
            <el-radio-button label="生活用品"></el-radio-button>
            </el-radio-group>
        </div>
        <input v-model = "name" class="name"  placeholder="修改物品名称"/>
        <input v-model = "number" class="numbers"  placeholder="修改存放数量"/>
        <input v-model = "item_information" class="item_information" placeholder="修改物品信息"/>
        <button class="button2" @click="handleSaved">提交</button>
        <button class="button1" @click="handleToCancel">取消</button>
        </div>
      </div>
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
  methods:{
      handleToCancel(){
          this.$store.commit('extract/CHANGE_GOODINFO',{isDisplays:false});
      },
      handleSaved(){
          this.axios.post('',{
              good_type:this.radio,
              good_number:this.number,
              good_message:this.item_information
          }).then((res) => {
              this.good_status = res.good_status;
              if(good_status === 'ok'){
                this.$message({
                    type: 'success',
                    message:"修改信息成功"
                });
              }else{
                this.$message({
                    type: 'error',
                    message:"修改信息失败"
                });
              }
          })
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
    height:360px;
    background-color: #fff;
    position:absolute;
    top:28%;
    left:35%;
}
.kind{
    margin-top:15px;
    margin-left:10px;
}
.name{
    width:380px;
    height:35px;
    border:none;
    border-bottom: 1px solid black;
    margin-top:20px;
    margin-left:10px;
}
.numbers{
    width:380px;
    height:35px;
    border:none;
    border-bottom: 1px solid black;
    margin-top:20px;
    margin-left:10px;
}
.item_information{
    width:380px;
    height:80px;
    border:none;
    border-bottom: 1px solid black;
    margin-top:20px;
    margin-left:10px;
}
.button1,.button2{
    width:80px;
    height:40px;
    float:right;
    margin-right: 20px;
    margin-top:20px;
}
.button1{
    border:1px solid black;
}
.button2{
    background-color: #fc8d07;
    color:white;
}
</style>
