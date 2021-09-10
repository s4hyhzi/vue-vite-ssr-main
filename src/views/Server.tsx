import {defineComponent, reactive} from "vue";
import {AsyncDataParam, key, useStore} from "../store";
import setSEO from "../utils/setSEO";
import {Button} from "ant-design-vue";
import classes from '../styles/Server.module.less'

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
        const state = reactive({
            list: [1, 2, 3, 4]
        })
        console.log('加载...服务')

        const setKey = () => {
            console.log(store)
            store.state.server = ['vue3']

            console.log(store.state.server)
        }

        return {
            setKey,
            store,
            state
        };
    },
    render() {
        return (
            <>
                <h3>服务端</h3>
                <span class={classes.span}>server：{this.store.state.server.toString()}</span>
                <Button class={classes.button} onClick={this.setKey}>改变
                </Button>
                {
                    this.state.list.map((item, index) => (
                        <p>{item}</p>
                    ))
                }
            </>
        )
    }
})
