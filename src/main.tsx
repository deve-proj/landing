import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { AuthFormProvider } from './core/context/authForm.context.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthFormProvider>
        <App />
    </AuthFormProvider>,
)
