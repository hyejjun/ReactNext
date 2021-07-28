import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import Router from "next/router"
import useInput from "../hooks/useInput"


const Login = () => {
    const userid = useInput('')         // 결과물이 Object
    const userpw = useInput('')         // 결과물이 Object

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(userid.value, userpw.value);
        
        userid.value === 'web7722' && userpw.value === '1234'
        ? Router.push('/')
        : alert('아이디와 패스워드가 다릅니다.')
    }

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
                    <button type='submit'>로그인</button>
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