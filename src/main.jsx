import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './contexts/CounterContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { ThemeSwitchProvider } from './contexts/ThemeSwitch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <CartContextProvider>
        <ThemeSwitchProvider>
        <App />
        </ThemeSwitchProvider>
      </CartContextProvider>
    </CounterProvider>
  </StrictMode>,
)
