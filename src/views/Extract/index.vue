<template>
<div class="save_body">
      <div class="save_head">
        <span @click="handleToBack">&lt;回到首页</span>
      </div>
      <el-row :gutter="2">
        <el-col :span="5" class="kinds" v-for="item in goodlist" :key="item._id" :offset="index > 0 ? 4 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="'http://'+item.good_pic | setWH('128.180') " class="image">
            <div style="padding: 14px;">
              <p>物品名字：{{item.good_name}}</p>
              <p>物品件数：{{item.good_number}}</p>
              <p>所属仓库：{{item.HouseName}}</p>
              <div class="bottom clearfix">
                <time class="time">所属分类：{{item.good_type}}</time>
                  <el-button type="warning" plain class="button" @click="handleToExtract(item.good_id)">提取</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-dialog
      title="提取"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请选择提取件数</span>
      <el-input-number v-model="num" :min="1" :max="	Infinity" label="描述文字"></el-input-number>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleToSubmit" class="color">确 定</el-button>
      </span>
    </el-dialog>
</div>
</template>

<script>
export default {
  name:'',
  components:{
  },
  data(){
   return {
     dialogVisible: false,
     num:1,
     good_id:'',
     goodlist:[]
  }
  },

  mounted(){
        this.axios({
        url:"/api/small/gooduser",
        method:'get',
        crossdomain:true,
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
        },
        }).then(res => {
            console.log(res);
            if(res.data.status){
              this.goodlist = res.data.data;
            }           
        });
        this.dialogVisible=false;
  },
  methods: {
      handleToExtract(id){
          this.dialogVisible=true;
          this.good_id = id;
      },
      handleToBack(){
          this.$router.push({path:'/home'});
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleToSubmit(){
          var index;
          for(var i = 0;i<this.goodlist.length;i++){
            if(this.goodlist[i].good_id == this.good_id){
              index = i;
            }
              console.log(this.good_id);
              console.log(typeof(this.good_id));
              // console.log(this.goodlist[index].good_type);
              // console.log(this.goodlist[index].good_name);
              // console.log(this.num);
              // console.log(this.goodlist[index].good_message);
            // console.log(this.goodlist[i].good_id);
          }
          var a = this.goodlist[index].good_number-this.num;
          console.log(a);
          console.log(typeof(a.toString()));
          // console.log(index);
          // this.dialogVisible=true;
          this.axios({
          url:"/api/small/goodsNumber",
          method:'put',
          crossdomain:true,
          data:{
              good_id:this.good_id,
              good_type:this.goodlist[index].good_type,
              good_name:this.goodlist[index].good_name,
              user_id:this.goodlist[index].user_id,
              house_id:this.goodlist[index].house_id,
              good_pic:this.goodlist[index].good_pic,
              good_status:'1',
              good_number:this.goodlist[index].good_number-this.num,
              good_message:this.goodlist[index].good_message,
          },
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
          },
          }).then(res => {
              console.log(res);
              const count = this.goodlist[index].good_number - this.num;
              if(res.data.status){
                if(count == 0){
                  this.goodlist = this.goodlist.splice(index-1,1);
                  this.$message({
                    type:'success',
                    message:'提取成功！'
                  })
                }else{
                  this.goodlist[index].good_number = count;
                  this.$message({
                    type:'success',
                    message:'提取成功！'
                  })
                }
              }
          });
        this.dialogVisible=false;
      }
  },
  beforeRouteEnter (to, from, next) {
      const token = window.sessionStorage.getItem('token');
      if(token){
        next();
      }else{
          alert("请先登录");
      }
  }
}
</script>
<style scoped>
.save_body{
    width:100%;
    position:relative;
}
.save_body .save_head{
    width:100%;
    height:230px;
    background-image: url('../../../public/images/back4.jpg');
    background-size: 100% 100%;
} 
.save_head span{
    color:#795909;
    cursor: pointer;
}
.kinds{
  margin-left:52px;
  margin-top:10px;
  margin-bottom: 10px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  float: right;
  margin-bottom:10px;
}
p{
  color:grey;
}
.image {
  width: 100%;
  height:300px;
}
.color{
  background-color: rgb(230,162,60);
  border:none;
}
</style>
