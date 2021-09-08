import {defineComponent, isReactive, onMounted} from "vue";
import {Store, useStore} from "vuex";
import {AsyncDataParam, key, State} from "../store";

export default defineComponent({
    setup(props, context) {
        const {client} = useStore<State>(key).state;
        console.log('加载...客户端')

        console.log(">>>", client, isReactive(client));

        return {
            client,
            // ...toRefs()
        };
    },
    render() {
        return (
            <>
                <h3>客户端</h3>
                client：{this.client.toString()}
            </>
        )
    }
})
