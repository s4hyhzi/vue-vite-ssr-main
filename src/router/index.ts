import {createRouter as _createRouter} from "./router";
import {RouteRecordNormalized} from "vue-router";

export function Router(store: any) {
    const router = _createRouter();
    // 路由拦截器
    router.beforeResolve(async (to, from) => {
        console.log(store,8)
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
        console.log('跳转')
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
