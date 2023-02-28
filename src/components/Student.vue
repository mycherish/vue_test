<template>
  <div class="student">
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名称给 App</button>
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
      sendStudentName() {
        // 触发 Student 组件实例身上的 atguigu 事件
        this.$emit('atguigu', this.name, 666, 888, 999)
      }
    }
}
</script>

<style scoped>
  .student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>