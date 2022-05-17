const state = {
    isAdmin:false,
    isDisplay:false,
    isChange:false,
    isSaveShow:false,
    _index:-1,
    _id:''
};
const actions = {

};
const mutations = {
    CHANGE_IDENTIFY(state,payload){
        state.isAdmin = payload.isAdmin;
    },
    CHANGE_COVER(state,payload){
        state.isDisplay = payload.isDisplay;
    },
    CHANGE_INDEX(state,payload){
        state._index = payload._index;
    },
    CHANGE_ISCHANGE(state,payload){
        state.isChange = payload.isChange;
    },
    CHANGE_ISSAVECHANGE(state,payload){
        state.isSaveShow = payload.isSaveShow;
    },
    CHANGE_ID(state,payload){
        state._id = payload._id;
    }
};
export default{
    namespaced:true,
    state,
    actions,
    mutations
}