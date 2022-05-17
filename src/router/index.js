import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRouter from './home';
import saveRouter from './save';
import extractRouter from './extract';
import adminRouter from './admin';
import orderRouter from './order';
import loginRouter from './login';
import store from '../store';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
    saveRouter,
    extractRouter,
    adminRouter,
    orderRouter,
    loginRouter
  ]
})

router.beforeEach((to, from, next) => {
if (to.matched.some(r => r.meta.requireAuth)) {   //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
if (store.state.home.token) {
next();
}
else {
next({
path: '/login',
query: {redirect: to.fullPath}
})
}
}
else {
next();
}
})

export default router