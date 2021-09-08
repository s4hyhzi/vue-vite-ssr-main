import {createApp} from "./main";

const {app, router, store} = createApp();


try {
    router.isReady().then(() => {
        app.mount("#app");
    });
} catch (e) {
    console.log(e)
}
