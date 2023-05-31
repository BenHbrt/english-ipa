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

    const keyFunc = () => {
        let newText = mode.text
        if (mode.text.length) {
            newText = mode.text.slice(0, -1) + phoneme.symbol + "/"
        } else {
            newText = "/" + phoneme.symbol + "/"
        }
        setMode({mode: mode.mode, text: newText})
    }

    const soundFunc = () => {
        const audio = new Audio(require(`../audio/${phoneme.audio}.mp3`))
        audio.play();
        
    }

    const clickHandler = () => {
        if (mode.mode.sound) {
            soundFunc()
        }

        if (mode.mode.keyboard) {
            keyFunc()
        }
    }

    return (
        <div className={`phoneme ${color} ${mode.mode.search ? "" : "pointer"}`} onClick={clickHandler}>
            {phoneme.symbol}
        </div>
    )
}

export default Phoneme