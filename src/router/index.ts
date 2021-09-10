import {createRouter as _createRouter} from "./router";
import {RouteRecordNormalized} from "vue-router";
import setSEO from "../utils/setSEO";

export function Router(store: any) {
    const router = _createRouter();
    // 路由拦截器
    router.beforeResolve(async (to, from) => {
        // console.log(to.meta.title)
        // @ts-ignore
        //判断是否在web环境如果是执行setSEO
        store.state.webEnv && setSEO(to.meta, store)
        // console.log(store.state, 13)
        let toMatchedComponents = getMatchedComponents(to.matched);
        let fromMatchedComponents = getMatchedComponents(from.matched);
        // 优化过滤
        let isSameCompoent = false;
        let components = toMatchedComponents.filter((compnent, index) => {
            return isSameCompoent || (isSameCompoent = fromMatchedComponents[index] !== compnent);
        });

        console.log("[components]", components, toMatchedComponents, fromMatchedComponents);

        // 需要执行async的组件
        components.length &&
        (await Promise.allSettled(
            components.map((component) => {
                // @ts-ignore
                if (component.asyncData) {
                    // @ts-ignore
                    return component.asyncData({store, route: to});
                }
            })
        ));
    });

    router.beforeEach((to, from, next) => {
        // console.log('跳转')
        next()
    })

    return router
}

function getMatchedComponents(list: RouteRecordNormalized[]) {
    return list.map(({components}) => {
        return components.default;
    });
}


export default {Router}
