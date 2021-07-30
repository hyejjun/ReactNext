import {createWrapper} from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers'       
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = ({dispatch,getState}) => (next) => (action) => {
    console.log(action)         // object
    //console.log(dispatch)       // function
    //console.log(getState)       // function
    //console.log(getState());
    return next(action)
}

const configureStore = ()=>{
    const middlewares = [loggerMiddleware,thunkMiddleware]
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    // composeWithDevTools 얘는 코드를 실행할때마다 dispatch를 남겨놓는다.
    const Store = createStore(reducer,enhancer)
    return Store
}


const wrapper = createWrapper(configureStore,{
    debug : process.env.NODE_ENV === 'development'
})     // 첫번째 인자값에 Store를 넣어준다 두번째 인자값에는 debug 어쩌구 - 개발 모드일때만.
// <Store.Provider></Store.Provider> 이거 대신 쓰려고 만듦
// _app.jsx 가서
export default wrapper