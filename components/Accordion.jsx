import Styled from "styled-components"
import Link from 'next/link'
import { useSelector } from "react-redux"


const Accordion = ({ visible, handleToggle }) => {
    const { menu } = useSelector((state) => state.category)

    // 여기서 NavToggle.jsx 에 있는 visible 값을 조작하기 위해서 handleToggle도 넘겨 받음. - 아코디언을 닫히고 열리게 하는 기능 
    const handelClick = () => {
        handleToggle()
    }
    // 혹은 onClick 에 바로 handleToggle 써도 된다.

    const category = menu.map((v) => {      // v 는 객체를 반환해줌
        return (
            <li key={v.id} onClick={handelClick}>
                <Link href={v.url}>
                    <a>
                        {v.category}
                    </a>
                </Link>
            </li>
        )
    })


    return (
        <>
            <AccordionMenu flag={visible}>             {/* styled component 는 props 값을 줄 수 있다.*/}
                <ul>
                    {category}
                </ul>
            </AccordionMenu>
        </>
    )
}

export default Accordion

const AccordionMenu = Styled.div`
    position: absolute;
    width: 100%;
    left : 0px;
    top: 10vh;
    z-index : 5;
    background: #fff;
    padding : 5vh 0;

    /* javascript 영역이다 - 아코디언이 visible 값에 따라 보이고 안보이게끔 함 */
    display:  ${props => (props.flag ? 'block' : 'none')};

    & > ul {
        display: flex;
        flex-direction : column;
    }

    & > ul >li {
        margin-top : 20px;
        text-align : center;
    }
`
