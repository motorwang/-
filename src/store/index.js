import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let store =  new Vuex.Store({
    state: {
        isLoading: false,
    },

    mutations: {
        // 控制loading的显示与隐藏
        loadingState(state, load){
            state.isLoading = load.isLoading;
        }
    },

    getters: {},

    actions: {}
})

export default store;
