<template>
<div class="save_body">
        <div class="save_head">
        <span @click="handleToBack">&lt;回到首页</span>
        </div>
        <div class="save_content">
        <ul>
        <li v-for="item in houseList" :key="item.house_id">
            <div class="pic_show"><img :src="'http://'+item.house_pic | setWH('128.180') "></div>
            <div class="info_list">
                <h2>{{item.house_name}}</h2>
                <p>仓库价格<span class="grade">{{item.house_price}}</span></p>
                <p>仓库大小：{{item.house_size}}</p>
            </div>
            <div class="btn_pre" @click="handleToSave(item.house_id)">
              存储 
            </div>
        </li>
        </ul>
      </div>
      <SaveDetail  v-if="true" class="save"></SaveDetail>
      <!-- $store.state.save.isDisplay -->
</div>
</template>

<script>
import SaveDetail from '../../components/SaveDetail';
export default {
  name:'',
  components:{
      SaveDetail
  },
  data(){
   return {
     houseList:[]
   }
  },
  mounted(){
            this.axios({
            url:"/api/small/house",
            method:'get',
            crossdomain:true,
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + window.sessionStorage.getItem('token'),
            },
        }).then(res => {
            console.log(res);
            this.houseList = res.data.data;
            console.log(this.houseList)
        });
  },
  methods: {
      handleToSave(item){
          console.log(item);
          this.$store.commit('save/CHANGE_COVER',{isDisplay:true});
          this.$store.commit('save/CHANGE_ITEM',{item_id:item});
      },
      handleToBack(){
          this.$router.push({path:'/home'});
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
.save{
    cursor: pointer;
}

#content .save_content{flex:1;overflow:auto;}
.save_content ul{margin:0 12px; overflow:hidden;}
.save_content ul li{margin-top:10px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;}
.save_content .pic_show{width:64px; height:100px;}
.save_content .pic_show img{width:100%;height:100px;}
.save_content .info_list{margin-left:10px;flex:1;position: relative;}
.save_content .info_list h2{font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.save_content .info_list p{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.save_content .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
/* .pic_show img{width:50px;position: relative;right:10px;top:20px;margin-top:-10px;} */
.save_content .btn_mall, .save_content .btn_pre{width:47px;height:27px;line-height: 28px;text-align: center;background-color: rgb(242,138,29);color:#fff;border-radius: 5%;}

</style>
