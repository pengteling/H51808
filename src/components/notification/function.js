import Vue from 'vue'
import Component from './func-notification'
const NotificationConstructor = Vue.extend(Component)
const instances = []
let seed = 1
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

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 56
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    instance.vm.$destory()
  })
  return instance.vm
}
export default notify
