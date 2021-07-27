import { useRouter } from 'next/router'
import BlogLayout from '../../components/BlogLayout'
import Head from 'next/head'

const Post = () => {
    const router = useRouter()      // 그냥 외우기
    const { post } = router.query
    return (
        <>
            <Head>
                <title>Blog | Post</title>
            </Head>

            <BlogLayout>
                {post} 페이지
            </BlogLayout>
        </>
    )
}

export default Post