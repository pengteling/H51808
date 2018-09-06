<template>
  <transition name="fade" @after-leave="afterLeave">
    <div
      class="notification"
      :style="style"
      v-show="visible"
    >
      <span class="content">{{ content }}</span>
      <a class="btn" @click.prevent="close">{{btn}}</a>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Notification',
  props: {
    content: {
      required: true,
      type: String
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    style () {
      return {

      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>
<style lang="scss">
.notification{
  position: fixed;
  right:20px;
  bottom:20px;
  padding:20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 280px;

  color:rgba(255,255,255,1);
  background-color:#303030;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,1);

  .content{
    padding:0
  };
  .btn{
    padding-left: 24px;
    margin-left:auto;
    cursor: pointer;
    color:#ff4081
  }
}
.fade-enter-active,.fade-leave-active{
  transition: all .5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>
