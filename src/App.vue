<template>
  <div>
    <header class="main-header">
      <h1>Todo</h1>
    </header>
    <div>
      <section class="real-app">
        <input type="checkbox" v-model="checkAll" v-if="todos.length"> <input type="text" class="add-input" placeholder="接下来做什么 ？" @keyup.enter="addTodo" ref="ipt">
        <item
          v-for="(todo,index) in todos"
          :key="index"
          :todo="todo"
          @delete-todo="deleteTodo"
        >
        </item>
        <tabs
          :left-items-count="leftItemsCount"
          :filter="filter"
          @toggle-filter="toggleFilter"
          :is-have-completed="isHaveCompleted"
          @clear-completed="clearCompleted"
        >
          
        </tabs>
  
      </section>
    </div>
    <footer id="footer">
      <span>written by Jacky</span>
    </footer>
  </div>
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
  components:{
    Tabs,
    Item
  },

  computed: {
    leftItemsCount() {
      return this.todos.reduce((t, v) => (v.isCompleted ? t : t + 1), 0);
    },
    isHaveCompleted() {
      return this.todos.some(item => item.isCompleted);
    },
    checkAll: {
      get() {
        return this.todos.every(item => item.isCompleted);
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
  }
};
</script>

