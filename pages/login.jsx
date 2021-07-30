import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import Router from "next/router"
import useInput from "../hooks/useInput"
import { useDispatch, useSelector } from 'react-redux'
import { UserLoginAction } from "../reducers/user"      // index에 없고 user에 있으니까.
import { useEffect } from "react"


const Login = () => {
    const dispatch = useDispatch()
    const { loading, IsLogin } = useSelector((state) => state.user)  // 로딩값을가져오고

    console.log("loading = ", loading);

    //dispatch({type : 'USER_LOGIN'})       -이거를 index.js 에서 미리 설정해놓고


    const userid = useInput('')         // 결과물이 Object
    const userpw = useInput('')         // 결과물이 Object

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(userid.value, userpw.value);
        const data = {                      // 객체를 만들어서 백쪽으로 던져준다
            userid: userid.value,
            userpw: userpw.value
        }

        await dispatch(UserLoginAction(data))

        //await dispatch(UserLoginAction(data))
        // 비동기 처리를 하면 이게 요청이 실행되기 전까지 밑에 코드가 실행되지 않음 
        // try catch 문이 완료 될때까지 기다렸다가 에러가 나면 그때 아래 코드를 실행시켜준다.

        /*userid.value === 'web7722' && userpw.value === '1234'
        ? Router.push('/')
        : alert('아이디와 패스워드가 다릅니다.')*/
    }

    useEffect(() => {
        IsLogin === true && Router.push('/')
        //: alert('아이디와 패스워드가 다릅니다.')
    }, [loading])
    // useEffect - componentDidMount 배열값이 비어있으면 . 배열안에 특정 값이 있으면 loading값이 바뀔때마다 실행됨

    return (
        <>
            <Head>
                <title>Blog | login</title>
            </Head>
            <FormLayout>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder='아이디를 입력해주세요' />
                    <input type="password" {...userpw} placeholder='패스워드를 입력해주세요' />
                    {loading ? '로그인로딩중!' : <button type='submit'>로그인</button>}      {/* loading 값이 true 일때만 로그인 버튼을 보여주게함 */}
                </form>
            </FormLayout>
        </>
    )
}

/*
    이거 왜 되냐?    
    {...userid}
    {...userpw}

    1. 위 아래 동일한거임
    value = 'ok'
    {...{'value':'ok'}}

    2. 위 아래 동일한거임
    {...{value :'web7722', onChange:()=>{alert(1)}}}
    value = 'web7722' onChange={()=>{alert(1)}}

    console.log(userid)
    {value:"", onChange:f}
    이렇게 찍힘
    위에처럼 바벨 문법으로 쓸 수 있게 객체 형태로 반환이 되도록 해준거임 그래서
    input 에다가 {...userid} 하면 저렇게 사용이 가능한거임

*/

export default Login