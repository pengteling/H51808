<template>
<footer class="footer ">
  <span class="todo-count">
    <strong>{{leftItemsCount}}</strong>

  <span> item</span>
  <span> left</span>
  </span>
  <ul class="filters ">
    <li v-for="state in states" @click="toggleFilter(state)" :key="state"><a :class="{'selected': filter === state}">{{ state }}</a><span> </span></li>
  </ul>
  <button class="clear-completed" v-if="isHaveCompleted" @click="clearCompleted">Clear completed</button>
</footer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {

  data () {
    return {
      states: ['All', 'Active', 'Completed']
    }
  },
  computed: {
    ...mapState(['filter']),
    ...mapGetters(['leftItemsCount', 'isHaveCompleted'])

  },
  methods: {
    ...mapMutations(['toggleFilter', 'clearCompleted'])
  }
}
</script>
