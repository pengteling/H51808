<template>
<footer class="footer ">
  <span class="todo-count">
    <strong>{{leftItemsCount}}</strong>
    <span> </span>
  <span>item</span>
  <span> left</span>
  </span>
  <ul class="filters ">
    <li v-for="state in states" @click="toggleFilter(state)" :key="state"><a :class="{'selected': filter === state}">{{ state }}</a><span> </span></li>    
  </ul>
  <button class="clear-completed" v-if="isHaveCompleted" @click="clearCompleted">Clear completed</button>
</footer>
</template>

<script>
export default {
  props: ["leftItemsCount", "filter", "isHaveCompleted"],
  data() {
    return {
      states: ["All", "Active", "Completed"]
    };
  },
  methods: {
    toggleFilter(state) {
      this.$emit("toggle-filter", state);
    },
    clearCompleted() {
      this.$emit("clear-completed");
    }
  }
};
</script>
