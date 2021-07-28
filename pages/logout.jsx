import Store from "../store/context"
import { useContext, useEffect } from "react"
import Router from 'next/router'

const logout = () => {
    const {dispatch} = useContext(Store)
    // 로그아웃 버튼 누르면 logout... 나온다음에 1초뒤에 로그인 버튼으로 바뀜
    useEffect(()=>{
        dispatch({type : 'LOGOUT'})     

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