import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import save from './save';
import extract from './extract';
import admin from './admin';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  modules:{
    home,
    save,
    extract,
    admin
  }
})
