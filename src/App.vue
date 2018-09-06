<template>
<section class="todoapp">
  <div>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" value="" @keyup.enter="addTodo" ref="ipt">
    </header>
    <section class="main" v-show="todos.length">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="checkAll">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <item v-for="(todo,index) in todosView" :key="index" :todo="todo" @delete-todo="deleteTodo">
        </item>        
      </ul>
    </section>
    <tabs
      v-show="todos.length" 
      :left-items-count="leftItemsCount" 
      :filter="filter" 
      @toggle-filter="toggleFilter" :is-have-completed="isHaveCompleted" @clear-completed="clearCompleted">
    </tabs>
  </div>
</section>
</template>

<script>
import "./style/comm.scss"
import Item from './components/Item'
import Tabs from './components/Tabs'
export default {
  data() {
    return {
      todos: [
        // {
        //   content:'回答',
        //   isCompleted:false
        // }
      ],
      filter: "All"
    };
  },
  components: {
    Tabs,
    Item
  },

  computed: {    
    todosView() {
      if (this.filter === 'All') {
        return this.todos
      } else if (this.filter === 'Active') {
        return this.todos.filter(v => !v.isCompleted)
      } else {
        return this.todos.filter(v => v.isCompleted)
      }
    },
    leftItemsCount() {
      return this.todos.reduce((t, v) => (v.isCompleted ? t : t + 1), 0);
    },
    isHaveCompleted() {
      return this.todos.some(item => item.isCompleted);
    },
    checkAll: {
      get() {
        return this.todos.every(item => item.isCompleted)
      },
      set(val) {
        this.todos.forEach(todo => (todo.isCompleted = val));
      }
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        // content:e.target.value
        content: this.$refs.ipt.value,
        isCompleted: false
      });
      this.$refs.ipt.value = "";
    },
    deleteTodo(todo) {
      // this.todos.splice(this.todos.findIndex(item=> todo===item),1)
      this.todos = this.todos.filter(item => item != todo);
    },
    toggleFilter(filter) {
      this.filter = filter;
    },
    clearCompleted() {
      this.todos = this.todos.filter(item => item.isCompleted !== true);
    }
  },
  updated () {
    localStorage.setItem('filter', this.filter)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  },
  created () {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
    if (localStorage.getItem('filter')) {
      this.filter = localStorage.getItem('filter')
    }
  }

};
</script>
