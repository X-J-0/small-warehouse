const state = {
    isDisplay:false,
    isDisplays:false,
};
const actions = {

};
const mutations = {
    CHANGE_COVER(state,payload){
        state.isDisplay = payload.isDisplay;
    },
    CHANGE_GOODINFO(state,payload){
        state.isDisplays = payload.isDisplays;
    }
};
export default{
    namespaced:true,
    state,
    actions,
    mutations
}