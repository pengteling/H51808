<template>
  <div class="todo-item" :class="{'completed': todo.isCompleted}">
    <input type="checkbox" v-model="todo.isCompleted">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo">X</button>
  </div>
</template>
<script>
export default {  
  props: ["todo"],
  methods: {
    deleteTodo() {
      this.$emit("delete-todo", this.todo);
    }
  }
};
</script>

