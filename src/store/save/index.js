const state = {
    isDisplay:false,
    item_id:''
};
const actions = {

};
const mutations = {
    CHANGE_COVER(state,payload){
        state.isDisplay = payload.isDisplay;
    },
    CHANGE_ITEM(state,payload){
        state.item_id = payload.item_id
    }
};
export default{
    namespaced:true,
    state,
    actions,
    mutations
}