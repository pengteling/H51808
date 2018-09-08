import Vuex from 'vuex'
import Vue from 'vue'
// import * as Types from './mutations-type'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [],
    filter: 'All'
  },
  getters: {
    todosView (state) {
      if (state.filter === 'All') {
        return state.todos
      } else if (state.filter === 'Active') {
        return state.todos.filter(v => !v.isCompleted)
      } else {
        return state.todos.filter(v => v.isCompleted)
      }
    },
    leftItemsCount (state) {
      return state.todos.reduce((t, v) => (v.isCompleted ? t : t + 1), 0)
    },
    isHaveCompleted (state) {
      return state.todos.some(item => item.isCompleted)
    },
    isHaveTodo (state) {
      return state.todos.length
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.unshift(todo)
    },
    changeCompleted (state, todo) {
      // state.todos[index].isCompleted =!
      state.todos = state.todos.map(item => {
        if (item === todo) {
          return Object.assign({}, item, { isCompleted: !item.isCompleted })
        } else {
          return item
        }
      })
    },
    changeTodo (state, payload) {
      // state.todos[index].isCompleted =!
      state.todos = state.todos.map(item => {
        if (item === payload.todo) {
          return Object.assign({}, item, { content: payload.value })
        } else {
          return item
        }
      })
    },
    deleteTodo (state, todo) {
      // state.todos.splice(state.todos.findIndex(item=> todo===item),1)
      state.todos = state.todos.filter(item => item !== todo)
    },
    toggleFilter (state, filter) {
      state.filter = filter
    },
    clearCompleted (state) {
      state.todos = state.todos.filter(item => item.isCompleted !== true)
    }
  }
})

export default store
