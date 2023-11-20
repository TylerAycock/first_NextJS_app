//our-domain.com/news
import Link from 'next/link'

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li><Link href='/news/nextjs'> NextJS is a GREAT FRAMEWORK</Link> </li>
                <li><Link href='/news/another'> Another Article</Link> </li>
            </ul>
        </>
    )
}

export default NewsPage