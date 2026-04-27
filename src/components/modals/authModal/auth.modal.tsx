import styles from './auth.modal.module.scss'
import { Checkbox } from '../../checkbox/checkbox'
import { UserApi } from '../../../../api/user/user.api'
import { useContext, useEffect, useState } from 'react'
import { AuthFormContext } from '../../../core/context/authForm.context'
import { RegistModal } from '../registModal/regist.modal'

export function AuthModal()
{
    const [needRemember, setNeedRemember] = useState(false)
    const [isPasswordVisible, changePasswordVisibility] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const alternatives = ["/icons/steam.svg", '/icons/google.svg', '/icons/github.svg']
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthDataIncorrect, setAuthDataIncorrect] = useState(false)
    const {setModalChild} = useContext(AuthFormContext)

    return(
        <div className={styles.content}>
            <div className={styles.logoBlock}>
                <img src='deve_logo.svg' className={styles.logo}/>
                <p className={styles.entryText}>Вход</p>
            </div>
            <div className={styles.inputBlock}>
                <p>ЛОГИН</p>
                <div className={styles.inputWrapper}>
                    <input placeholder='Введите логин' onChange={(e) => setLogin(e.target.value)}/>
                </div>
            </div>
            <div className={styles.inputBlock}>
                <p>ПАРОЛЬ</p>
                <div className={styles.inputWrapper}>
                    <input placeholder='Введите пароль' type={isPasswordVisible ? "text" : "password"} onChange={(e) => setPassword(e.target.value)}/>
                    <img src={isPasswordVisible ? "/icons/Eye off.svg" : "/icons/Eye.svg"} className={styles.inputIcon} onClick={() => changePasswordVisibility(!isPasswordVisible)}/>
                </div>
                <div className={styles.checkboxAndForgotBlock}>
                    <div className={styles.remember}>
                        <Checkbox isSelected={needRemember} onClick={() => setNeedRemember(!needRemember)}/>
                        <p onClick={() => setNeedRemember(!needRemember)}>Запомнить меня</p>
                    </div>
                    <p className={styles.forgotPassword}>Забыли пароль?</p>
                </div>
            </div>
            <button onClick={async () => {

                try
                {
                    if(login.trim() != "" && password.trim() != "")
                    {
                        setLoading(true)

                        const result = await UserApi.Login(login, password)

                        setLoading(false)
                        
                        if(result == 200)
                        {
                            window.open("http://localhost:5174")
                        }
                        else
                        {
                            setAuthDataIncorrect(true)
                        }
                    }
                }
                catch(e)
                {
                    setLoading(false)
                    console.error(e)
                }

            }}>
                {!isLoading ? "Войти" : <img src="/icons/spinner.svg"/>}
            </button>
            <div className={styles.alternatives}>
                <div className={styles.alternativesTextBlock}>
                    <hr/>
                    <p>ИЛИ ВОЙТИ ЧЕРЕЗ</p>
                    <hr/>
                </div>
                <ul className={styles.alternativesList}>
                    {
                        alternatives.map((item, index) => (
                            <li key={index}>
                                <img src={item}/>
                            </li>
                        ))
                    }
                </ul>
                <hr/>
            </div>
            <div className={styles.noAccount}>
                <p>Нет акаунта?</p>
                <p className={styles.registText} onClick={() => setModalChild(<RegistModal/>)}>Зарегистрироваться</p>
            </div>
        </div>
    )
}