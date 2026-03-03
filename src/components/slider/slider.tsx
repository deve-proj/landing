import { useRef } from 'react';
import styles from './slider.module.scss'

function Slider()
{
    const images = [
        {
            source: 'corporate_wars.png',
            title: 'Войны корпораций'
        },
        {
            source: 'danger_missions.png',
            title: 'Опасные миссии'
        },
        {
            source: 'espionage.png',
            title: 'Шпионаж'
        },
        {
            source: 'github.png',
            title: 'Интеграция проектов'
        },
        {
            source: 'hh.png',
            title: 'Рейтинги для работодателей'
        },
        {
            source: 'knowledge_bases.png',
            title: 'Базы знаний'
        },
        {
            source: 'statistic.png',
            title: 'Персональная статистика'
        }
    ];

    // Дублируем массив для создания эффекта бесконечности
    const infiniteImages = [...images]; // Три копии

    return(
        <section className={styles.main}>
            <ul className={styles.list}>
                {infiniteImages.map((item, index) => (
                    <li key={index}>
                        <img src={item.source} alt={item.title} />
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Slider;