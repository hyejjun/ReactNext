import Link from 'next/link'        // 링크 처리
import NavToggle from '../NavToggle'
import Styled from 'styled-components'
//import { useContext } from 'react'
//import Store from '../../store/context'
import { useSelector } from 'react-redux'

const HeaderContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 5vw;
    box-sizing:border-box;
    border-bottom:1px solid #ddd;
    width:100vw;
    height: 10vh;
`
const Gnb = Styled.ul`
    /* 모바일 */
    display: flex;
    flex-direction : row;

    /* & 는 내 자신 */
    & > li {
        margin-left : 20px;
    }

    /* 미디어 쿼리 PC 내용들 */
    @media only screen and (min-width:768px){
        //display: none;
    }
    
`

const LoginComponent = () => {
    return (
        <>
            <li><Link href='/login'><a>로그인</a></Link></li>
            <li><Link href='/join'><a>회원가입</a></Link></li>
        </>
    )
}

const LogoutComponent = () => {
    return (
        <>
            <li><Link href='/logout'><a>로그아웃</a></Link></li>
            <li><Link href='/profile'><a>회원정보</a></Link></li>
        </>
    )
}

const Header = () => {
    /*
    // 인자값이? - createContext를 담았던 변수가 들어간다.
    const globalStore = useContext(Store)       // {IsLogin : false} -> {state : {IsLogin:flase}, dispatch:()=>{}}   reducer를 사용하면서 값이 이렇게 변함
    // console.log(globalStore);
    const { IsLogin } = globalStore.state       // true or false
    console.log(IsLogin);*/

    const { IsLogin } = useSelector((state) => state.user)     //redux에 저장된 상태값 가져오기!! (0729)
    console.log(IsLogin);

    return (
        <>
            <HeaderContainer className="header">
                <h1>로고</h1>
                <Gnb>
                    <li>
                        <Link href='/'>
                            <a>home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/posts/post'>
                            <a>글쓰기</a>
                        </Link>
                    </li>

                    {
                        IsLogin === false ? <LoginComponent/> : <LogoutComponent/>
                    }
                </Gnb>
                {/* 여기에 NavToggle 넣어보자 */}
                <NavToggle />
            </HeaderContainer>
        </>
    )
}

export default Header