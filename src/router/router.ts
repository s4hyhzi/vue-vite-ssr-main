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
    },
    {
        path: "/",
        component: () => import("../views"),
        children: [
            {
                path: "client",
                component: () => import("../views/Client"),
            },
            {
                path: "server",
                component: () => import("../views/Server"),
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
