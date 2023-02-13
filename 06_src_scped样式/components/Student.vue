<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
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
    }
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>