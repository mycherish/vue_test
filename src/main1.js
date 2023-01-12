/*
入口文件
*/
// 引入vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'

// 关闭 vue 的生产提示
Vue.config.productionTip = false
// 创建 vue 的事例对象---vm
new Vue({
  el: '#app',
  render: h => h(App),
  // component: {App}
})
// .$mount('#app')
