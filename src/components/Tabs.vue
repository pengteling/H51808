<template>
<div class="helper">
  <span class="left">{{leftItemsCount}} items left</span>
  <span class="tabs">
        <span 
          v-for="state in states"
          :class="{'actived': filter === state}"
          @click="toggleFilter(state)"
          :key="state"
        >
          {{ state }}

        </span>
  </span>
  <span class="clear" v-if="isHaveCompleted" @click="clearCompleted">
        clearCompleted
      </span>

</div>
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
