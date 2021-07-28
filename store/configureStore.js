import {createWrapper} from 'next-redux-wrapper'
import { createStore } from 'redux'

const configureStore = ()=>{
    // context -> createContext
    // const store = createContext(initalState)
    // 초기값은 reducer에있다.
    const store = createStore(reducer)
}

const wrapper = createWrapper(configureStore,{})

export default wrapper