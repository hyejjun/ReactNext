// 회원가입, 로그인일 때만 쓰는 폼 이라고 생각하면됨 - 요즘 트랜드는 개별 페이지로 되어있음 그리고 위에 헤더부분이 없음
import Router from "next/router"
import styled from './FormLayout.module.css'        // 객체 형태로 만들어짐

const FormLayout = ({ children }) => {
    return (
        <>
            <button onClick={()=>{Router.back()}}>뒤로가기</button>
            {children}
            <div className={styled.footer}>
                copyright &copy; all reserved
            </div>
        </>
    )
}

export default FormLayout