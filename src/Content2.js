import { useEffect, useState } from 'react'

function Content () {
    const [countdown, setCountdown] = useState(180)
    useEffect(() => {
        setInterval( () => {
            setCountdown (prevState => prevState 1)
        }, 1000)
    },
    return (
        <div>
            <hl>{countdown}</h1>
        </div>
}



export default Content2
