import {defineComponent, onMounted} from "vue";

export default defineComponent({
    setup(props, context) {
        console.log('加载...首页')
        return {};
    },
    render(){
        return (
            <>
                <h2>首页</h2>
                <router-view></router-view>
            </>
        )
    }
})
