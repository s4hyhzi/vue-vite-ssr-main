import {defineComponent} from "vue";
import '../styles/Test.less'
import {NGradientText} from "naive-ui";

export default defineComponent({
    render() {
        return (
            <div id='test'>
                <NGradientText type="info"> 测试 </NGradientText>
            </div>
        )
    }
})
