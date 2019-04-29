import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(["@/pages/home"], resolve),  // 路由懒加载
            meta: {
                title: "首页",
            }
        },
        {
            path: "/in_theaters",
            name: "in_theaters",
            component: resolve => require(["@/pages/in_theaters"], resolve),
            meta: {
                title: "正在热映"
            }
        },






        {
            path: "/demo",
            name: "demo",
            component: resolve => require(["@/pages/demo"], resolve),
            meta: {
                title: "测试"
            }
        }
    ]
})


export default router;
