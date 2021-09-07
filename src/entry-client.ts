import {createApp} from "./main";

const {app, router, store} = createApp();

try {
    router.isReady().then(() => {
        app.mount("#app");
    });
} catch (e) {
    console.log(e)
}
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
