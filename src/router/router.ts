import {
    createWebHistory,
    createRouter as _createRouter,
    createMemoryHistory,
    RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/index",
        component: () => import("../views"),
        meta:{
            title:'首页'
        }
    },
    {
        path: "/",
        component: () => import("../views"),
        children: [
            {
                path: "client",
                component: () => import("../views/Client"),
                meta:{
                    title:'客户端'
                }
            },
            {
                path: "server",
                component: () => import("../views/Server"),
                meta:{
                    title:'服务端'
                }
            },
        ],
    },
];

export function createRouter() {
    return _createRouter({
        // history: import.meta.env.SSR ? createMemoryHistory("/ssr") : createWebHistory("/ssr"),
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
    });
}
