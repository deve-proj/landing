import { url } from 'inspector'
import styles from './news_card.module.scss'
import { INewsCard } from './news_card.props'

export function NewsCard(props : INewsCard)
{

    return(

        <div className={styles.main}>
            <img src={props.imageUrl}/>
            <p>{props.title}</p>
        </div>

    )

}