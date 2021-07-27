import Styled from 'styled-components'
import { useState } from 'react'

const Toggle = Styled.div`
    background : transparent;
    border-color : transparent;

    & > .nav-toggle {
        display : none;
    }

    & > .nav-toggle + label{
        display : block;
        width : 2.5rem;
        height : 2rem;
        position : relative;
        cursor : pointer;
    }

    & > .nav-toggle + label > span{
        display : block;
        position : absolute;
        width : 100%;
        height : 5px;
        border-radius : 30px;
        background : #000;
        transition : all .35s;
    }

    & > .nav-toggle + label > span:nth-child(1){ top : 0 }
    & > .nav-toggle + label > span:nth-child(2){ top : 50%; transform : translateY(-50%) }
    & > .nav-toggle + label > span:nth-child(3){ bottom : 0 }


    & > .nav-toggle:checked + label > span:nth-child(1){ top : 50%; transform: translateY(-50%) rotate(45deg); }
    & > .nav-toggle:checked + label > span:nth-child(2){ opacity : 0 }
    & > .nav-toggle:checked + label > span:nth-child(3){ bottom : 50%; transform: translateY(50%) rotate(-45deg); }
`

const Accordion = Styled.div`
    position: absolute;
    width: 100%;
    left : 0px;
    top: 10vh;
    z-index : 5;
    background: #fff;
    padding : 5vh 0;

    /* javascript 영역이다 - 아코디언이 visible 값에 따라 보이고 안보이게끔 함 */
    display:  ${props=>(props.flag? 'block' : 'none')};

    & > ul {
        display: flex;
        flex-direction : column;
    }

    & > ul >li {
        margin-top : 20px;
        text-align : center;
    }
`



const NavToggle = () => {
    // 상태값을 설정함
    const [visible, setVisible] = useState(false)

    const handleToggle = () => {
        setVisible(!visible)
    }

    return (
        <>
            <Toggle>
                <input
                    type="checkbox"
                    id="nav-toggle"
                    className="nav-toggle"
                    onClick={handleToggle}
                />
                <label htmlFor="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                {/* 메뉴생성 */}
                <Accordion flag = {visible}>             {/* styled component 는 props 값을 줄 수 있다.*/}
                    <ul>
                        <li>대분류메뉴1</li>
                        <li>대분류메뉴2</li>
                        <li>대분류메뉴3</li>
                        <li>대분류메뉴4</li>
                        <li>대분류메뉴5</li>
                    </ul>
                </Accordion>
            </Toggle>
        </>
    )
}

export default NavToggle