import {defineComponent} from "vue";
import Test from "./views/Test";

export default defineComponent({
    setup(props, context) {
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
