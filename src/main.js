// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router/index';

// store
import store from "./store";

import "./utils/request/http.js";

import { Indicator } from "mint-ui";
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;


// 使用router事件钩子控制loading组件的值
// 路由跳转前的钩子
Router.beforeEach((to, from, next) => {
    console.log("路由前");
    Indicator.open('加载中...');
    // store.commit("loadingState", { isLoading: true })
    next();
})
// 路由跳转后的钩子
Router.afterEach((to, from) => {
    console.log("路由后");
    setTimeout(function(){
        Indicator.close();
    }, 50)
    // Indicator.close();
    // store.commit("loadingState", { isLoading: false })
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: Router,
    store,
    components: { App },
    template: '<App/>'
})
