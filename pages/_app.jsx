// 모든 컴포넌트에 공통적인 걸 넣고 싶을 때 사용한다 - 보통 common.css 를 import 할때 많이 사용한다. 
import '../index.css'
import Head from 'next/head'
import Store,{initalState} from './store/context'
import { useContext, useReducer } from 'react'
import { reducer } from './store/reducer'

const App = ({ Component }) => {
    const globalContext = useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalContext)
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,700;0,800;0,900;1,300;1,600&display=swap" rel="stylesheet" />
            </Head>
            {/* hello!!! */}
            <Store.Provider value={{state,dispatch}}>        {/* initalState 의 값을 바꾸고 싶을때는 여기서 바꾸면 됨 {'userid': 'web7722'} 이런식으로 */}
                <Component />       {/* 이 위치에 우리가 만든 파일(index.jsx /login.jsx / join.jsx)들이 들어간다. */}
            </Store.Provider>
            {/* End */}
        </>
    )
}

export default App