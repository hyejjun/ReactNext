//import Store from "../store/context"
import { useEffect } from "react"
import Router from 'next/router'
import {useDispatch} from 'react-redux'
import { UserLogoutAction } from "../reducers/user"

const logout = () => {
    //const {dispatch} = useContext(Store)      - Store ver
    // 로그아웃 버튼 누르면 logout... 나온다음에 1초뒤에 로그인 버튼으로 바뀜

    const dispatch = useDispatch()
    useEffect(()=>{
        //dispatch({type : 'LOGOUT'})  이거 대신   
        dispatch(UserLogoutAction())    // 이걸로 쓴다 - redux 
        setTimeout(()=>{
            Router.back()
        },1000)
    },[])
    
    return (
        <>
            logout....
        </>
    )
}


export default logout