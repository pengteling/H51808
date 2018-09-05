export default {
  name: 'App',
  data () {
    return {
      msg: 123,
      isShow: true,
      arr: [1, 2, 3]
    }
  },
  render () {
    return (
      <div>
        <div v-show={this.isShow} >{ this.msg }</div>
        <input type="text" v-model={this.msg} />
        {
          this.arr.map(element =>
            <span>{element}</span>
          )
        }
      </div>
    )
  }
}
