import { useContext, useEffect, useState } from 'react'
import styles from './authForm.module.scss'
import { AuthFormContext } from '../../../core/context/authForm.context'
import { Checkbox } from '../../checkbox/checkbox'


export const AuthForm = () => {

    const {isAuthFormVisible, closeAuthForm, modalChild} = useContext(AuthFormContext)
    

    useEffect(() => {

        const handleEsc = (e : KeyboardEvent) => {

            if(e.key == 'Escape')
                closeAuthForm()

        }

        if(isAuthFormVisible)
            document.addEventListener('keydown', handleEsc)

        else
            document.removeEventListener('keydown', handleEsc)

    }, [isAuthFormVisible, closeAuthForm])

    return(

        <section className={styles.main} onClick={() => closeAuthForm()}>
            <div className={styles.form} onClick={e => e.stopPropagation()}>
                {modalChild}
            </div>
        </section>

    )

}