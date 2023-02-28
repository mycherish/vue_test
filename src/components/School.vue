<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名称给 App</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    props: ['getShoolName'],
    data() {
        return {
          name: '尚硅谷',
          address: '北京'
        }
    },
    methods: {
      sendSchoolName() {
        this.getShoolName(this.name)
      }
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>