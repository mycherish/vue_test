<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的 DOM 元素</button>
    <school ref="sch" />
  </div>
</template>

<script>
// 引入 School 组件
import School from './components/School'
export default {
    name: 'App',
    components: {School},
    data() {
        return {
            msg: '欢迎学习 Vue！！'
        }
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title)   // 真实 DOM 元素
            console.log(this.$refs.btn) // 真实 DOM 元素
            console.log(this.$refs.sch) // School 组件的实例对象（vc）
        }
    },
}
</script>

<style>

</style>