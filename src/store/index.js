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
    },
    checkAll (state) {
      return state.todos.every(item => item.isCompleted)
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.unshift(todo)
    },
    changeCompleted (state, todo) {
      let index = state.todos.findIndex(item => item === todo)
      state.todos[index].isCompleted = !state.todos[index].isCompleted
      // state.todos[index].isCompleted =!
      console.log(state)
      // state.todos = state.todos.map(item => {
      //   if (item === todo) {
      //     return Object.assign({}, item, { isCompleted: !item.isCompleted })
      //   } else {
      //     return item
      //   }
      // })
    },
    changeTodo (state, payload) {
      console.log('changeTodo mutaion', payload)
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
    },
    selectAll (state, checkAll) {
      state.todos.forEach(todo => (todo.isCompleted = checkAll))
    },
    init (state, payload) {
      if (payload.todos) {
        state.todos = payload.todos
        state.filter = payload.filter
      }
    }
  },
  actions: {
    saveData ({ state }, payload) {
      localStorage.setItem('filter', state.filter)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    loadData ({ commit }) {
      let todos, filter
      if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'))
      }
      if (localStorage.getItem('filter')) {
        filter = localStorage.getItem('filter')
      }
      commit('init', {
        todos: todos || [],
        filter: filter || 'All'
      })
    }
  }
})

export default store
