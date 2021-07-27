import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import { useState } from "react"
import Router from "next/router"

/* userid userpw 한번에 통제 - custum hook - 이제부터 많이 쓸거임*/
const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const onChange = e => {
        const { value } = { ...e.target }
        setValue(value)
    }

    return {
        value,
        onChange
    }
}

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
    {
        value :'web7722'
        onChange:()=>{alert(1)}
    }
    value = 'web7722' onChange={()=>{alert(1)}}

*/

export default Login