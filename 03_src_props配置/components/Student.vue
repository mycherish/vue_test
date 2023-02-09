<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">点击修改收到的 age</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
          msg: '我是一个学生',
          myAge: this.age
        }
    },
    methods: {
      updateAge() {
        this.myAge++
      }
    },
    // props: ['name', 'sex', 'age']  // 简单声明接收

    // 接收的同时对数据进行类型限制
    // props:{
    //   name: String,
    //   age: Number,
    //   sex: String
    // }

    // 接收的同时对数据进行：类型限制 + 默认值的指定 + 必要性限制
      props: {
        name: {
          type: String,
          required: true
        },
        age: {
          type: Number,
          default: 99
        },
        sex: {
          type: String,
          required: true
        }
      }
}
</script>