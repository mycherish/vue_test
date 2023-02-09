<template>
  <div>
    <h2>学校名称：{{ name | myslice }}</h2>
    <h2>地址：{{ address }}</h2>
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