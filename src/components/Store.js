import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer} from './Reducer'
//引入thunk进行异步编程
import  thunk from 'redux-thunk'


//引入redux-thunk
export default createStore(
 reducer,composeWithDevTools(applyMiddleware(thunk))
)