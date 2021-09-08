import {defineComponent} from "vue";
import {AsyncDataParam, key, useStore} from "../store";

export default defineComponent({
    setup(props, context) {
        const store = useStore(key)
        console.log('加载...服务')

        const setKey = () => {
            console.log(store)
            store.state.server = ['vue3']

            console.log(store.state.server)
        }

        return {
            // ...toRefs()
            setKey,
            store
        };
    },
    render() {
        return (
            <>
                <h3>服务端</h3>
                server：{this.store.state.server}
                <button onClick={this.setKey}>改变
                </button>
            </>
        )
    }
})