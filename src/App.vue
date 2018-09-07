<template>
  <div>
    <Child></Child>
    <!-- test
    <p>
      state: {{ $store.state.msg }} <br>
      getter : {{ $store.getters.secUser }}
    </p>
    <p>
      count:{{ count }}
    </p>
    <p>
      obj:{{ obj }}
    </p> -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Child from '@/Child'
export default{
  mounted () {
    console.log(this.$store)
    // this.$store.state.msg = 456

    // commit mutation
    // setInterval(() => this.$store.commit('addCount'), 1000)
    // setInterval(() => this.addCountComp(), 1000)
    // setInterval(() => this.addCountStep(3), 1000)
    // setInterval(() => this.addCountStep({ step: 3 }), 1000)
    // setInterval(() => this.$store.commit('addCountStep', { step: 3 }), 1000)
    // setInterval(() => this.$store.commit({
    //   type: 'addCountStep',
    //   // payload: { step: 3 }
    //   step: 3
    // }), 1000)
    // setInterval(() => this.$store.commit({
    //   type: 'addCountStep',
    //   // payload: { step: 3 }
    //   step: 3
    // }), 1000)
    // this.changeObj()
    // setTimeout(() => this.$store.dispatch('addCountAction', { step: 3 }), 3000)
    // setTimeout(() => this.$store.dispatch({
    //   type: 'addCountAction',
    //   step: 3
    // }), 3000)
  },
  data () {
    return {
      // msg: 123
      message: 123
    }
  },
  // computed: mapState(['msg', 'arr']),
  computed: {
    ...mapState(['count', 'obj']),
    ...mapState({
      msg3: 'msg',
      arr2: 'arr',
      users: 'users',
      vmsg (state) {
        return state.arr[2] + state.msg + this.message
      },
      vmsg2: state => state.arr[2] + state.msg
    }),
    ...mapGetters(['secUser', 'userWho']),
    ...mapGetters({
      user2: 'secUser'
    }),
    thirdUser () {
      return this.userWho(3)
    },
    user3 () {
      return this.$store.getters.userWho(3)
    },
    msg2 () {
      return this.message + 2
    }
    // secUser () {
    //   return this.users[1]
    // }
  },
  methods: {
    ...mapMutations(['addCount', 'addCountStep', 'changeObj']),
    ...mapMutations({
      addCountComp: 'addCount'
    }),
    ...mapActions(['addCountAction', 'loadData', 'loadDataB']),
    ...mapActions({
      addCountActionComp: 'addCountAction'
    })
  },
  created () {
    // this.addCountAction({ step: 3 })
    // this.addCountActionComp({ step: 3 })
    // // this.loadData()
    // this.loadDataB()
  },
  components: {
    Child
  }
}
</script>
