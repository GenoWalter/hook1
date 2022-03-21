import { useState, createContext } from 'react'
import Content from "./Content"
import './App.css'

export const ThemeContext = createContext()

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
         setTheme (theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme}>Toggle</button>
                <Content />
            </div>
        </ThemeContext.Provider>
    )
}

export default App