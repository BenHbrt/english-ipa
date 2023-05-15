import './ControlPanel.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'

const ControlPanel = () => {

    const { display, setDisplay } = useContext(DisplayContext)

    const handleChange = (key, value) => {
        if (key === "vowels" || key === "consonants") {
            const newDisplay = { ...display }
            Object.keys(newDisplay).forEach(v => newDisplay[v] = false)
            newDisplay[key] = value
            setDisplay(newDisplay)
        }
    }

    return (
        <div className="controlPanel">
            {/* <button onClick={() => handleChange("vowels", !display.vowels)}>Vowels</button> */}
            <button onClick={() => setDisplay((prev) => {return {...prev, vowels: !display.vowels}})}>Vowels</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, monothongs: !display.monothongs}})} disabled={!display.vowels}>Monothongs</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, dipthongs: !display.dipthongs}})} disabled={!display.vowels}>Dipthongs</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, short: !display.short}})} disabled={!display.vowels}>Short</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, long: !display.long}})} disabled={!display.vowels}>Long</button>
            {/* <button onClick={() => handleChange("consonants", !display.consonants)}>Consonants</button> */}
            <button onClick={() => setDisplay((prev) => {return {...prev, consonants: !display.consonants}})}>Consonants</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, pairs: !display.pairs}})} disabled={!display.consonants}>Pairs</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, plosives: !display.plosives}})} disabled={!display.consonants}>Plosives</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, fricatives: !display.fricatives}})} disabled={!display.consonants}>Fricatives</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, affricates: !display.affricates}})} disabled={!display.consonants}>Affricates</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, nasals: !display.nasals}})} disabled={!display.consonants}>Nasals</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, approximants: !display.approximants}})} disabled={!display.consonants}>Approximants</button>
            <button onClick={() => setDisplay((prev) => {return {...prev, voiced: !display.voiced}})}>Voiced?</button>
        </div>
    )
}

export default ControlPanel