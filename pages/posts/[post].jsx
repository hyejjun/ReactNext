import { useRouter } from 'next/router'
import BlogLayout from '../../components/BlogLayout'
import Head from 'next/head'

const data = [
    {
        id : '1',
        subject : 'ingoos blog',
        content : 'HTML을 시작해보자',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '2',
        subject : 'ingoos blog',
        content : 'HTML을 시작해보자2',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '3',
        subject : 'ingoos blog',
        content : 'HTML을 시작해보자3',
        date : '2021-07-28',
        hit : '0'
    },
]

const Post = () => {
    // 게시글들...
    const router = useRouter()      // 그냥 외우기
    const { post } = router.query       // 얘가 카테고리 이름
    // post 는 카테코리의 번호 DB idx id 
    // server 요청해서 id 관련된 게시물들을 가져올 수 있도록
    /* 게시글 하나마다 줄 수 있는거는
        게시 번호 / 제목 / 날짜 / 조회수 - json 형태를 만들어주면된다.
    */

    const list = data.map((v)=>{
        return(
            <div key={v.id}>
                <ul>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                </ul>
            </div>
        )
    })
    
    return (
        <>
            <Head>
                <title>Blog | List</title>
            </Head>

            <BlogLayout>
                {post} 리스트 페이지
                <div>
                    {list}
                </div>
            </BlogLayout>
        </>
    )
}

export default Post