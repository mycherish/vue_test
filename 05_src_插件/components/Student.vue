<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name">
    <button @click="test">点我测试一下 hello 方法</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
          name: '逻辑',
          sex: '男'
        }
    },
    methods: {
      test() {
        this.hello()
      }
    }
}
</script>