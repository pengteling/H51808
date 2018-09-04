<script>
export default {
  functional:true,
  props:['prop1'],
  render(h,context){
    console.log(context)
    return h('div','comp')
  }
}
</script>

