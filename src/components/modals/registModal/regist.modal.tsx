import styles from './regist.modal.module.scss'
import { Checkbox } from '../../checkbox/checkbox'
import { UserApi } from '../../../../api/user/user.api'
import { useContext, useEffect, useState } from 'react'
import { AuthFormContext } from '../../../core/context/authForm.context'
import { AuthModal } from '../authModal/auth.modal'

export function RegistModal()
{
    const [allowUserConfirmation, setAllowUserConfirmation] = useState(false)
    const [isOriginPasswordVisible, changeOriginPasswordVisibility] = useState(false)
    const [isConfirmPasswordVisible, changeConfirmPasswordVisibility] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const alternatives = ["/icons/steam.svg", '/icons/google.svg', '/icons/github.svg']
    const [login, setLogin] = useState('')
    const [name, setName] = useState('')
    const [originPassword, setOriginPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isAuthDataIncorrect, setAuthDataIncorrect] = useState(false)
    const {setModalChild} = useContext(AuthFormContext)

    return(
        <div className={styles.content}>
            <div className={styles.logoBlock}>
                <img src='deve_logo.svg' className={styles.logo}/>
                <p className={styles.entryText}>Регистрация</p>
            </div>
            <div className={styles.inputBlock}>
                <p>ЛОГИН</p>
                <div className={styles.inputWrapper}>
                    <input placeholder='Введите логин' onChange={(e) => setLogin(e.target.value)}/>
                </div>
            </div>
            <div className={styles.inputBlock}>
                <p>ИМЯ ПОЛЬЗОВАТЕЛЯ</p>
                <div className={styles.inputWrapper}>
                    <input placeholder='Введите имя пользователя' onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div className={styles.inputBlock}>
                <p>ПАРОЛЬ</p>
                <div className={styles.inputWrapper}>
                    <input placeholder='Введите пароль' type={isOriginPasswordVisible ? "text" : "password"} onChange={(e) => setOriginPassword(e.target.value)}/>
                    <img src={isOriginPasswordVisible ? "/icons/Eye off.svg" : "/icons/Eye.svg"} className={styles.inputIcon} onClick={() => changeOriginPasswordVisibility(!isOriginPasswordVisible)}/>
                </div>
            </div>
            <div className={styles.inputBlock}>
                <p>ПОВТОРИТЕ ПАРОЛЬ</p>
                <div className={styles.inputWrapper}>
                    <input placeholder='Введите пароль' type={isConfirmPasswordVisible ? "text" : "password"} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <img src={isConfirmPasswordVisible ? "/icons/Eye off.svg" : "/icons/Eye.svg"} className={styles.inputIcon} onClick={() => changeConfirmPasswordVisibility(!isConfirmPasswordVisible)}/>
                </div>
            </div>
            <div className={styles.allowUserConfirmation}>
                <Checkbox isSelected={allowUserConfirmation} onClick={() => setAllowUserConfirmation(!allowUserConfirmation)}/>
                <div>
                    <p>Я принимаю условия</p>
                    <p className={styles.confirmationText}>Пользовательского соглашения</p>
                </div>
            </div>
            <button onClick={async () => {

                try
                {
                    if(login.trim() != "" && originPassword.trim() != "" && confirmPassword.trim() != "" && name.trim() != "" && allowUserConfirmation)
                    {

                        setLoading(true)

                        const result = await UserApi.Regist(login, originPassword, name)

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
                {!isLoading ? "Зарегистрироваться" : <img src="/icons/spinner.svg"/>}
            </button>
            <div className={styles.alternatives}>
                <div className={styles.alternativesTextBlock}>
                    <hr/>
                    <p>ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ ЧЕРЕЗ</p>
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
                <p>Уже есть аккаунт?</p>
                <p className={styles.registText} onClick={() => setModalChild(<AuthModal/>)}>Войти</p>
            </div>
        </div>
    )
}