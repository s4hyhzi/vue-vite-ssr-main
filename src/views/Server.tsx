import {defineComponent} from "vue";
import {AsyncDataParam, key, useStore} from "../store";
import setSEO from "../utils/setSEO";

export default defineComponent({
    asyncData({store}: AsyncDataParam) {
        setSEO({
            title: '文章',
            keywords: '我的测试',
            description: '测试',
            author: '小煜'
        }, store)
    },
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
                server：{this.store.state.server.toString()}
                <button onClick={this.setKey}>改变
                </button>
            </>
        )
    }
})
