import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'
import Slider from './components/slider/slider'
import Header from './components/header/header'

function App() {

    return(

        <section className={styles.main}>
            <Header/>
            <Slider/>
        </section>

    )

}

export default App
