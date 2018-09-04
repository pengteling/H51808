// export default (context) => {
  
// }

// export default {
//   functional:true,
//   props:['prop1'],
//   render(h,context){
//     console.log(context)
//     return h('div','comp')
//   }
// }
// const Child = {
//   functional:true,
//   props:['prop1'],
//   render(h,context){
//     console.log(context)
//     return h('div','comp2')
//   }
// }
const arr = [1,2,3]

const Child = ({props}) => {
  return (
    <div>test - {props.prop1} - {arr}</div>
  )
}
export default {
  // components:{
  //   Child
  // },
  render(){
    return(
      <Child prop1="test2">- {arr}</Child>
    )
  }
}