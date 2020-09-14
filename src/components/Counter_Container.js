import {connect} from 'react-redux'
import Counter from './Counter'
import { add, asyncAdd, even, sub,asyncAddAction } from './Action'


// const  mapStateToProps =(state)=> ({count:state})
// const  mapDispatchToProps=(dispatch)=>({
//   add:(value)=>dispatch(add(value)),
//   sub:(value)=>dispatch(sub(value)),
//   even:(value)=>dispatch(even(value)),
//   asyncAdd:(value)=>dispatch(asyncAdd(value))
// })
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)

//简写方式
export default connect((state)=>({count:state}),
  {
    add:add,
    sub:sub,
    even:even,
    asyncAdd:asyncAdd,
    asyncAddAction:asyncAddAction
  }
)(Counter)
