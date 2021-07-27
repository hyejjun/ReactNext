import BlogLayout from "../components/BlogLayout"
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <BlogLayout>
                {/* hello world             이 내용이 children 내용이 된다. */}
                <div>
                    {/* public 
                        -> localhost:3001/[폴더명]/사진.jpg   //폴더가 있다면
                        -> localhost:3001/사진.jpg              
                        사용할때는 로컬호스트 생략하고 / 만 쓰면 된다.
                    */}
                    <img src="/logo_new_2018.png" />
                </div>
            </BlogLayout>
        </>
    )
}

export default Index