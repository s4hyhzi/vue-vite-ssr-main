import {createSSRApp} from "vue";
import {Router} from "./router/index";
import {createStore, key} from "./store";
import App from "./App";


export function createApp() {
    const app = createSSRApp(App);
    const {store} = createStore();
    const router = Router(store);
    // app.use(store);
    app.use(router);

    app.use(store, key);
    return {app, router, store};
}

