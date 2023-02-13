<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2 class="atguigu">地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
          name: '尚硅谷12345',
          address: '北京'
        }
    },
}
</script>

<style lang="less" scoped>
  .demo{
    background-color: skyblue;
    .atguigu{
      font-size: 40px;
    }
  }
</style>