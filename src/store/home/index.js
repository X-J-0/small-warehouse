const state = {
    isSearch:false,
    isShow:false,
    token:'',
    isAdmin:false
};
const actions = {

};
const mutations = {
    CHANGE_SHOW(state,payload){
        state.isShow = payload.isShow;
    },
    CHANGE_IDENTIF(state,payload){
        state.isAdmin = payload.isAdmin;
    },
    SET_TOKEN(state,payload){
        state.token = payload.token;
        sessionStorage.token = payload.token;
    },
    DELETE_TOKEN(state){
        state.token = '';
        sessionStorage.removeItem('token');
    }
};
export default{
    namespaced:true,
    state,
    actions,
    mutations
}