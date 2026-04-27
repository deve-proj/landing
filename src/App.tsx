import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'
import Slider from './components/slider/slider'
import Header from './components/header/header'
import { PVBar } from '@lovchikovmark/pretty-voting'
import { News } from './components/news/news'
import { AuthForm } from './components/layouts/authForm/authForm'
import { AuthFormContext } from './core/context/authForm.context'

function App() {

    const authFormContext = useContext(AuthFormContext)
    
    return(

        <section className={styles.main}>
            <Header/>
            <Slider/>
            <News/>
        </section>

    )

}

export default App
