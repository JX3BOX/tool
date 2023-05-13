import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    // tool
    {
        name: "index",
        path: "/tool",
        component: () => import("@/views/Tool.vue"),
        meta: {
            type: 'tool'
        }
    },
    // jx3dat
    {
        name: "jx3dat",
        path: "/jx3dat",
        component: () => import("@/views/Jx3Dat.vue"),
        meta: {
            type: 'jx3dat'
        }
    },
    // app
    {
        name: "database",
        path: "/app/database",
        component: () => import("@/views/Database.vue"),
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
