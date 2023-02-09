export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('myslice', function(value){
            return value.slice(0, 4)
        })
        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })
        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        // 给原型上添加一个方法，（ vm 和 vc 就都能用了）
        Vue.prototype.hello = () => {alert('你好啊👋')}
    }
}