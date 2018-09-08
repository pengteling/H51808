<template>
  <div>
    Child:
    {{ $store.state.msg }}
    <br>
    {{ this.$store.state.moduleA.msg }}
    <Cell></Cell>
    <p>
      {{ aCount }}
    </p>
  </div>

</template>
<script>
import Cell from './Cell'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['users', 'moduleA']),
    ...mapState({
      cMsg: state => state.moduleA.msg
    }),
    ...mapState('moduleA', ['msg']),
    ...mapState('moduleA', {
      cMsg2: state => state.msg,
      cMsg3: 'msg'
    }),
    ...mapGetters(['moduleA/aCount']),
    ...mapGetters('moduleA', ['aCount']),
    ...mapGetters('moduleA', {
      aCount2: 'aCount'
    }),

    secUser () {
      return this.users[1]
    }
  },
  methods: {
    ...mapMutations('moduleA/moduleB', ['changeCount'])
  },
  mounted () {
    console.log(this['moduleA/aCount'])
    this.changeCount(789)
    // this.$store.registerModule(['moduleA', 'myModule'], {
    //   state: {
    //     count: 111
    //   }
    // })
    // this.$store.unregisterModule('myModule')
    // setTimeout(() => {
    //   this.$store.unregisterModule('myModule')
    //   console.log(this.$store)
    // }, 5000)
  },
  components: {
    Cell
  }
}
</script>
