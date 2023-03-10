// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入插件
import plugins from './plugin'
// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins)
// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App)
})