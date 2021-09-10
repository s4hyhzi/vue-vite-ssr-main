import {defineComponent} from "vue";
import '../styles/Test.less'
import {Alert} from "ant-design-vue";

export default defineComponent({
    render() {
        return (
            <>
                <Alert message={'测试'} type="success"/>
            </>
        )
    }
})
