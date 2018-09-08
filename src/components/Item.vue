<template>
  <li :class="{completed:todo.isCompleted,editing:isEditing}">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        v-model="completed"
      >
      <!-- :checked="todo.isCompleted"
        @input="changeCompleted(todo)" -->
      <label @dblclick="editTodo(todo)">{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo(todo)"></button>
    </div>
    <input v-show="isEditing" ref="iptEdit" class="edit" v-focus="true" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" :value="todo.content"  >
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  // model:{
  //   props:"checked"
  // },
  props: ['todo'],
  data () {
    return {
      isEditing: false
      // cache: this.todo.content
    }
  },
  computed: {
    completed: {
      get () {
        return this.todo.isCompleted
      },
      set (val) {
        console.log('set')
        this.changeCompleted(this.todo)
      }
    }
  },

  methods: {
    ...mapMutations(['changeCompleted', 'deleteTodo', 'changeTodo']),

    editTodo () {
      this.isEditing = true
    },
    doneEdit (todo) {
      console.log('doneEdit')
      this.changeTodo({ todo: todo, value: this.$refs.iptEdit.value })
      this.isEditing = false
    },
    cancelEdit () {
      // this.$refs.iptEdit.value = this.cache
      console.log('cancelEdit')
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
