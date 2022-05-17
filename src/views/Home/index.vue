<template>
  <div class="home">
      <Header class="header"></Header>
    <router-view></router-view>
    <div @click="handleToManager" class="jiantou"  v-if="$store.state.home.isAdmin">  
      进入后台管理&gt;
    </div>
    <img src="../../../public/images/timg.jpg" class="images"/>
    <div class="right">
      <p><pre>Small Logistics</pre></p>
      <p>小仓物流·简介</p>
      <div>
        <el-carousel indicator-position="outside" height="180px" interval="1000">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3></h3>
        </el-carousel-item>
        </el-carousel>
      </div>

      <pre>闪送汪平台的研发针对的是网购商品的时效性问题，解决了目前淘宝模式所不具备的快捷问题，在
现今经济受疫情影响的大背景下，大品牌门店受到了强大的冲击，拿全球运动品牌adidas举例，最
近，阿迪达斯发布的业绩报告显示，受疫情影响，今年一季度净利润同比大跌96%，全球超70%门店
仍处于关闭状态。足以证明线下门店受疫情以及网络平台的影响较大，闪送汪平台的研发不仅仅是
服务消费者，同时为线下销售的门店提供了一个解决方案，与平台合作，作为供货商销售产品，提
升销量，避免了因门店人流量少产生的影响。</pre>
      <div class="tb">
        <i class="el-icon-shopping-cart-full"></i>
        <p>淘宝模式</p>
      </div>
      <div class="ss">
        <i class="el-icon-lightning"></i>
        <p>闪送模式</p>
      </div>
      <div class="wm">
        <i class="el-icon-bicycle"></i>
        <p>外卖模式</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/index';
export default {
  name: 'Home',
  components: {
    Header
  },
  methods:{
    handleToManager(){
      this.$router.push({path:'/admin'})
    }
  }
}
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url('../../../public/images/work4.jpg');
    background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url('../../../public/images/work3.jpg');
    background-size: 100% 100%;
  }
el-carousel{
  width:650px;
  height:650px;
  position:absolute;
  top:100px;
  right:50px;
}
.images{
  width:650px;
  height:630px;
  position:absolute;
  top:100px;
  right:50px;
}
.jiantou{
  margin-left:92%;
  cursor: pointer;
}
.jiantou:hover{
  color:rgb(121, 58, 29);
}
.right{
  position:absolute;
  top:100px;
  left:75px;
  /* height:710px; */
}
.right :nth-child(1){
  color:rgb(17, 173, 212);
  font-size:42px;
  font-weight: 800;
  margin-bottom:10px;
}
.right :nth-child(2){
  font-size: 24px;
  font-weight: 400;
  margin-bottom:10px;
}
pre{
  font-size:16px;
  color:grey;
  margin-top:-10px;
}
.worker{
  width:680px;
  height:180px;
}
.tb,.ss,.wm{
  float:left;
  padding-right:65px;
  padding-left:65px;
  border-right: 1px solid;
  margin-top:20px;
} 

</style>