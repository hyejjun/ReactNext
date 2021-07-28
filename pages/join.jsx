import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import useInput from "../hooks/useInput"
import { useState } from "react"

/*
    아이디
    이름
    패스워드    - 얘네 둘은 여기서만 코드를 만들고 - 훅스로 만들지 말자
    패스워드 확인 -
    전화번호
*/
const Join = () => {
    const userid = useInput('')
    const password = useInput('')
    const username = useInput('')
    const userphone = useInput('')

    /* 패스워드 체크할때 실시간으로 체크하도록 해보자 */
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const handlePassword = (e) => {
        const { value } = { ...e.target }
        setPasswordError(password.value !== value)  // 에러가 없다면 false 값을 갖고 있는 상태고 에러가 생기면 true 가 됨
        setPasswordCheck(value)
    }

    /* 가입약관 동의 부분 */
    const [term, setTerm] = useState(false)
    const [termError, setTermError] = useState(false)

    const handleTerm = (e) => {
        //console.log(e.target.checked);
        // setTerm(!term)
        setTermError(e.target.checked !== true)
        // e.target.checked : true -> true !== true / false
        // e.target.checked : false -> false !== true / true -> 에러 발생
        setTerm(e.target.checked)
    }

    const handleSubmit = (e) => {
        // 여기서 dispatch로 보내야하기 때문에 value 까지 써주자
        e.preventDefault()
        // submit 을 했을때도 비번이랑 동의 했는지 한번 더 체크!

        if (password.value !== passwordCheck) {
            setPasswordError(true)
            return
        } else {
            setPasswordError(false)
        }

        if (!term) {
            setTermError(true)
            return
        }

        // 객체 형태로
        console.log(
            {
                userid : userid.value,
                userpw : password.value,
                username : username.value,
                userphone : userphone.value,
            }
        );
    }



    return (
        <>
            <Head>
                <title>Blog | join</title>
            </Head>
            <FormLayout>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"  {...userid} placeholder="아이디를 입력해주세요." />  <br />
                    <input type="text"  {...username} placeholder="이름을 입력해주세요." />  <br />
                    <input type="password" {...password} placeholder="비밀번호를 입력해주세요." />  <br />
                    <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="비밀번호를 다시 입력해주세요." />  <br />

                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}       {/* 한줄 if 문이라고 생각하면 된다. - boolean 값만 가능 */}
                    { /*true && "이거 뜹니다"*/}
                    { /*false && "안뜹니다"*/}

                    <input type="text"  {...userphone} placeholder="전화번호를 입력해주세요." />  <br />

                    <input type="checkbox" checked={term} id="term" onChange={handleTerm} />  {/* 얘도 상태를 만들어주는게 좋다. */}
                    <label htmlFor="term">약관에 동의해주세요</label>
                    {termError && <div style={{ color: 'red' }}>약관에 동의해주세요!!</div>}
                    <br />

                    <button type="submit">가입</button>
                </form>
            </FormLayout>
        </>
    )
}

export default Join