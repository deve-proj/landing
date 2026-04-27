import { useContext, createContext, useState, useEffect } from "react";
import { AuthForm } from "../../components/layouts/authForm/authForm";

export const AuthFormContext = createContext(null)

export const AuthFormProvider = ({children}) => {

    
    const [isAuthFormVisible, setAuthFormVisibility] = useState(false)
    const [modalChild, setModalChild] = useState()

    const openAuthForm = (modalChild) => {

        setAuthFormVisibility(true)
        setModalChild(modalChild)

    }

    const closeAuthForm = () => setAuthFormVisibility(false)

    useEffect(() => {

        console.log(isAuthFormVisible)

    }, [isAuthFormVisible])

    console.log('🏗️ AuthFormProvider MOUNTED!')
    
    useEffect(() => {
        return () => {
            console.log('💀 AuthFormProvider UNMOUNTED')
        }
    }, [])

    return(

        <AuthFormContext.Provider value={{isAuthFormVisible, openAuthForm, closeAuthForm, modalChild, setModalChild}}>
            {isAuthFormVisible && <AuthForm></AuthForm>}
            {children}
        </AuthFormContext.Provider>

    )

}

