<template>
  <div>
    <Student name="里斯" sex="女" :age="19"/>
  </div>
</template>

<script>
// 引入 School 组件
import Student from './components/Student'
export default {
    name: 'App',
    components: {Student}
}
</script>

<style>

</style>