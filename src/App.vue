<template>
<section class="todoapp">
  <div>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" value="" @keyup.enter="addTodo" ref="ipt">
    </header>
    <section class="main" v-show="isHaveTodo">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="checkAll">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <item v-for="(todo,index) in todosView" :key="index" :todo="todo">
        </item>
      </ul>
    </section>
    <tabs
      v-show="isHaveTodo"
    >
    </tabs>
  </div>
</section>
</template>

<script>
import './style/comm.scss'
import Item from './components/Item'
import Tabs from './components/Tabs'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    Tabs,
    Item
  },

  computed: {
    ...mapGetters(['isHaveTodo', 'todosView']),
    ...mapGetters({
      checkAllComp: 'checkAll'
    }),
    checkAll: {
      get () {
        return this.checkAllComp
      },
      set (val) {
        // this.todos.forEach(todo => (todo.isCompleted = val))
        this.selectAll(val)
      }
    }
  },
  methods: {
    ...mapMutations({
      addTodoStore: 'addTodo',
      selectAll: 'selectAll'
    }),
    ...mapActions(['saveData', 'loadData']),
    addTodo (e) {
      // this.todos.unshift({
      //   // content:e.target.value
      //   content: this.$refs.ipt.value,
      //   isCompleted: false
      // })
      // this.$store.commit('addCount', {
      //   content: this.$refs.ipt.value,
      //   isCompleted: false
      // })
      this.addTodoStore({
        content: this.$refs.ipt.value,
        isCompleted: false
      })
      this.$refs.ipt.value = ''
    }
    // deleteTodo (todo) {
    //   // this.todos.splice(this.todos.findIndex(item=> todo===item),1)
    //   this.todos = this.todos.filter(item => item !== todo)
    // },
    // toggleFilter (filter) {
    //   this.filter = filter
    // },
    // clearCompleted () {
    //   this.todos = this.todos.filter(item => item.isCompleted !== true)
    // }
  },
  updated () {
    this.saveData()
    // localStorage.setItem('filter', this.filter)
    // localStorage.setItem('todos', JSON.stringify(this.todos))
  },
  created () {
    // if (localStorage.getItem('todos')) {
    //   this.todos = JSON.parse(localStorage.getItem('todos'))
    // }
    // if (localStorage.getItem('filter')) {
    //   this.filter = localStorage.getItem('filter')
    // }
    this.loadData()
  }

}
</script>
