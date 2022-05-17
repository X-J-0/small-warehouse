import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';

Vue.prototype.axios = axios;
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});
Vue.use(VueLazyload, {
     loading: require('../public/images/loading.jpg'),//加载中图片，一定要有，不然会一直重复加载占位图
     error: require('../public/images/error.jpg')  //加载失败图片
});

// axios.defaults.headers.common['Authentication'] = store.state.home.token;
// // 添加请求拦截器
// axios.interceptors.request.use(config => {
//   // 在发送请求之前做些什么
//   //判断是否存在token，如果存在将每个页面header都添加token
//   if(store.state.home.token){
//   config.headers.common['Authentication']=store.state.home.token
//   }
    
//   return config;
//   }, error => {
//   // 对请求错误做些什么
//   return Promise.reject(error);
//   });
    
//   // http response 拦截器
//   axios.interceptors.response.use(
//   response => {
    
//   return response;
//   },
//   error => {
    
//   if (error.response) {
//   switch (error.response.status) {
//   case 401:
//   this.$store.commit('DELETE_TOKEN');
//   router.replace({
//   path: '/home/login',
//   query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
//   })
//   }
//   }
//   return Promise.reject(error.response.status)
//    }
//    );

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
