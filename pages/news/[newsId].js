//our-domain.com/news/important

import {useRouter} from 'next/router'

const DetailPage = () => {

   const router = useRouter()

   console.log(router.query.newsId)

   const newsId = router.query.newsId

   //send a request to the backend API 
   //to fetch news item that matches this newsId

    return (
        <h1> Important thing I need to Say</h1>
    )
}

export default DetailPage