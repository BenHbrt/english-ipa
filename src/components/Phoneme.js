import './Phoneme.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'
import { ModeContext } from '../App'

const Phoneme = ({ phoneme }) => {

    let color = ""
    const { display } = useContext(DisplayContext)
    const { mode, setMode } = useContext(ModeContext)

    if (display.fricatives && phoneme.subType.includes("fricative")) {
        color = "fricative"
    } else if (display.plosives && phoneme.subType.includes("plosive")) {
        color = "plosive"
    } else if (display.affricates && phoneme.subType.includes("affricate")) {
        color = "affricate"
    } else if (display.nasals && phoneme.subType.includes("nasal")) {
        color = "nasal"
    } else if (display.approximants && phoneme.subType.includes("approximant")) {
        color = "approximant"
    } else if (display.short && phoneme.subType.includes("short")) {
        color = "short"
    } else if (display.long && phoneme.subType.includes("long")) {
        color = "long"
    }

    if (display.voiced === true && phoneme.subType.includes("voiceless")) {
        color += " voiceless"
    } else if (display.voiced === true && phoneme.subType.includes("voiced") && color === "") {
        color = "voiced"
    }

    const func = () => {
        setMode((...prev) => {return {mode: mode.mode, text: (mode.text + phoneme.symbol)}})
    }

    return (
        <div className={`phoneme ${color}`} onClick={() => {if (mode.mode === "keyboard") {func()}}}>
            {phoneme.symbol}
        </div>
    )
}

export default Phoneme