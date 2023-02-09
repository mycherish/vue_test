<template>
  <div>
    <h2 @click="showName">姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
    name: 'Student',
    data() {
        return {
          name: '逻辑',
          sex: '男'
        }
    },
    mixins: [hunhe]
}
</script>