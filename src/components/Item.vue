<template>
  <li :class="{completed:todo.isCompleted,editing:isEditing}">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        v-model="todo.isCompleted"
      >
      <label @dblclick="editTodo(todo)">{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input v-show="isEditing" ref="iptEdit" class="edit" v-focus="true" v-model.lazy="todo.content" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
  </li>
</template>

<script>
export default {
  // model:{
  //   props:"checked"
  // },
  props: ['todo'],
  data () {
    return {
      isEditing: false,
      cache: this.todo.content
    }
  },

  methods: {
    deleteTodo () {
      this.$emit('delete-todo', this.todo)
    },
    editTodo () {
      this.isEditing = true
    },
    doneEdit () {
      this.isEditing = false
    },
    cancelEdit () {
      this.$refs.iptEdit.value = this.cache
      this.isEditing = false
    }
  },
  directives: {
    'focus': (el, binding) => {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>
