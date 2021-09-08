// index.ts
import {InjectionKey} from "vue";
import {RouteLocationNormalized} from "vue-router";
import {createStore as _createStore, Store, useStore as baseUseStore} from "vuex";

// 为 store state 声明类型
export interface State {
    client: string[];
    server: string[];
}

export interface AsyncDataParam {
    store: Store<State>;
    route: RouteLocationNormalized;
}

// // 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(key: InjectionKey<Store<State>>) {
    return baseUseStore(key)
}

export function createStore() {
    const store = _createStore<State>({
        state: {
            client: ["vue3", "vue-router", "vuex"],
            server: ["vite", "express", "serialize-javascript"],
        },
        mutations: {
            setClient(state, data) {
                state.client = data;
            },
            setServer(state, data) {
                state.server = data;
            },
        },
        actions: {

        }
    });
    // 替换state
    // @ts-ignore
    if (!import.meta.env.SSR && window && window.__INITIAL_STATE__) {
        // @ts-ignore
        store.replaceState(window.__INITIAL_STATE__);
    }

    return {store};
}
