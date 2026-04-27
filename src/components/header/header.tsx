import { useContext, useState } from 'react';
import styles from './header.module.scss'
import { AuthFormContext } from '../../core/context/authForm.context';
import { AuthModal } from '../modals/authModal/auth.modal';

function Header()
{

    const [filter, setFilter] = useState("")
    const {isAuthFormVisible, openAuthForm} = useContext(AuthFormContext)

    return(

        <section className={styles.main}>
            <img src="deve_logo.png" className={styles.logo}/>
            <input value={filter} onChange={e => setFilter(e.target.value)}/>
            <div>
                <button className={styles['login-btn']} onClick={() => openAuthForm(<AuthModal/>)}>
                    <p>Войти</p>
                </button>
                <button className={styles['register-btn']}>
                    <p>Регистрация</p>
                </button>
            </div>
        </section>

    )
}

export default Header;