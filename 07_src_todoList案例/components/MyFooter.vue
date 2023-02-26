<template>
  <div class="todo-footer" v-show="total">
    <label>
        <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
        <input type="checkbox" v-model="isAll">
    </label>
    <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props: ['todos', 'checAllTodo', 'clearAllTodo'],
    computed: {
      total() {
        return this.todos.length
      },
      doneTotal() {
        return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
      },
      // isAll() {
      //   return this.total === this.doneTotal && this.total > 0
      // }
      isAll: {
        get() {
          return this.total === this.doneTotal && this.total > 0
        },
        set(value) {
          this.checAllTodo(value)
        }
      }
    },
    methods: {
      // checkAll(e){
      //   this.checAllTodo(e.target.checked)
      // }
      clearAll() {
        this.clearAllTodo()
      }
    }
  }

</script>

<style scoped>
  /* footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer lable {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer lable input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>