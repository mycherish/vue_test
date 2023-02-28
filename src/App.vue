<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <School :getShoolName="getShoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，@或v-on） -->
    <Student @atguigu="getStudentName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用 ref） -->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
// 引入 School 组件
import Student from './components/Student'
import School from './components/School'
export default {
    name: 'App',
    components: {Student, School},
    data() {
      return {
        msg: '你好啊！！！'
      }
    },
    methods: {
      getShoolName(name) {
        console.log('App收到了学校名：', name)
      },
      getStudentName(name, ...params) {
        console.log('App收到了学生名：', name, params)
      }
    },
    mounted() {
      // setTimeout(() => {
      //   this.$refs.student.$on('atguigu', this.getStudentName) // 绑定自定义事件
      // }, 3000)
      // this.$refs.student.$once('atguigu', this.getStudentName) // 绑定自定义事件（一次性）
    }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>