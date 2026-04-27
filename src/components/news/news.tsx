import { useEffect, useState } from 'react'
import styles from './news.module.scss'
import { NewsApi } from '../../../api/news/news.api'
import { NewsCard } from './news_card/news_card'
import { INewsCard } from './news_card/news_card.props'

export function News()
{

    const [news, setNews] = useState<INewsCard[]>([])

    useEffect(() => {

        (async () => {

            setNews((await NewsApi.getNews()).map(item => ({postId: item.id, title: item.post.title, views: item.views, imageUrl: item.post.previewImage})))

        })()

    }, [])

    useEffect(() => {

        console.dir(news)

    }, [news])

    return(

        <section className={styles.main}>

            
                <p>Что нового в DEVE?</p>
                <div className={styles.posts}>
                    {
                        news.map((item, index) => (

                            <NewsCard key={index} {...item}/>

                        ))
                    }
                </div>
            

        </section>

    )

}