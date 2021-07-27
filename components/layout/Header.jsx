const Header = () => {
    return (
        <>
            <div className="header">
                <h1>로고</h1>
                <ul>
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
                    <li>
                        <Link href='/login'>
                            <a>로그인</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/join'>
                            <a>회원가입</a>
                        </Link>
                    </li>
                </ul>
                {/* 여기에 NavToggle 넣어보자 */}
                <NavToggle />
            </div>

        </>
    )
}

export default Header