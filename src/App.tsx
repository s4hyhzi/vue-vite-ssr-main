import {defineComponent, onMounted} from "vue";
import Test from "./views/Test";
import {key, useStore} from "./store";

export default defineComponent({
    setup(props, context) {
        const store = useStore(key)
        onMounted(() => {
            console.log('App.tsx')
            store.state.webEnv = true
        })
        return {};
    },
    components: {
        Test
    },
    render() {
        return (
            <>
                <Test/>
                <router-link to="/">首页→</router-link>
                | <router-link to="/client">客户端→</router-link> |
                <router-link to="/server">服务端→</router-link>
                <router-view></router-view>
            </>
        )
    }
})
