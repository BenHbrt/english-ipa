import './ControlPanel.scss'

import { useContext, useState, useEffect } from 'react'
import { DisplayContext } from '../App'

const ControlPanel = () => {

    const { display, setDisplay } = useContext(DisplayContext)

    const handleChange = (key, value) => {
        if (key === "vowels") {
            const newDisplay = { ...display }
            Object.keys(newDisplay).forEach(v => newDisplay[v] = false)
            newDisplay[key] = value
            setDisplay(newDisplay)
        }
    }

    return (
        <div className="controlPanel">
            <button onClick={() => handleChange("vowels", !display.vowels)}>Vowels</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, monothongs: !display.monothongs}})} disabled={!display.vowels}>Monothongs</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, dipthongs: !display.dipthongs}})} disabled={!display.vowels}>Dipthongs</button>
        </div>
    )
}

export default ControlPanel