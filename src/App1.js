import { useState } from "react"
import {Content} from './Content5'

// 1. memo () -> Higher Order Component (HOC)
// 2. useCalback()

// Hooks
// HOC
// Render props

function App() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const increase = () => {
        setCount (count + 1)
    }

    const increase2 = () => {
        setCount2(count2 + 1)
    }

    return (
        <div style={{ padding: '10px 32px' }}>
            <Content count={count} />
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase}>Click me!</button>
            <button onClick={increase2}>Click me 2!</button>
        </div>
    )
}

export default App1
