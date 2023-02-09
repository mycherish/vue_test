<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
    name: 'School',
    data() {
        return {
          name: '尚硅谷',
          address: '北京'
        }
    },
    mixins: [hunhe]
}
</script>