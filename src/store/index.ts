// index.ts
import {InjectionKey} from "vue";
import {RouteLocationNormalized} from "vue-router";
import {createStore as _createStore, Store, useStore as baseUseStore} from "vuex";

// 为 store state 声明类型
export interface State {
    client: string[];
    server: string[];
    description: string;
    keywords: string;
    author: string;
    webEnv: boolean
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
            keywords: '',
            description: '',
            author: '',
            webEnv: false
        },
        mutations: {
            setClient(state, data) {
                state.client = data;
            },
            setServer(state, data) {
                state.server = data;
            },
            setKeywords(state, data) {
                state.keywords = data
            },
            setDescription(state, data) {
                state.description = data
            },
            setAuthor(state, data) {
                state.author = data
            }
        },
        actions: {
            ASYNC_KEYWORDS({commit}, data: string) {
                return new Promise(((resolve, reject) => {
                    commit('setKeywords', data)
                    resolve(true)
                }))
            },
            ASYNC_DESCRIPTION({commit}, data: string) {
                return new Promise(((resolve, reject) => {
                    commit('setDescription', data)
                    resolve(true)
                }))
            }
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
