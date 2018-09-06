import Vue from 'vue'
import Component from './func-notification'
const NotificationConstructor = Vue.extend(Component)
const instances = []
let seed = 1
const removeInstance = (instance) => {
  if (!instance) return false
  console.log('removeInstance')
  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)
  instances.splice(index, 1)
  if (len > 1) { // 调整高度
    const removeHeight = instance.vm.height
    console.log(removeHeight)
    for (let i = index; i < len - 1; i++) {
      instances[i].verticalOffset = instances[i].verticalOffset - removeHeight - 16
    }
  }
}
const notify = (options) => {
  // if(Vue.prototype.$is)
  const { autoClose, ...rest } = options
  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 56
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    instance.vm.$destroy()
  })
  return instance.vm
}
export default notify
