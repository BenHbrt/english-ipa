import './Phoneme.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'
import { ModeContext } from '../App'

const Phoneme = ({ phoneme }) => {

    let color = ""
    const { display } = useContext(DisplayContext)
    const { mode, setMode } = useContext(ModeContext)

    let flash = true

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
    } else if (display.approximants && phoneme.subType.includes("lateral approximant")) {
        color = "approximant"
    } else if (display.bilabial && phoneme.subType.includes("bilabial")) {
        color = "bilabial"
    } else if (display.alveolar && phoneme.subType.includes("alveolar")) {
        color = "alveolar"
    } else if (display.palatoalveolar && phoneme.subType.includes("palato-alveolar")) {
        color = "palatoalveolar"
    } else if (display.velar && phoneme.subType.includes("velar")) {
        color = "velar"
    } else if (display.labiodental && phoneme.subType.includes("labio-dental")) {
        color = "labiodental"
    } else if (display.dental && phoneme.subType.includes("dental")) {
        color = "dental"
    }  else if (display.glottal && phoneme.subType.includes("glottal")) {
        color = "glottal"
    } else if (display.postalveolar && phoneme.subType.includes("postalveolar")) {
        color = "postalveolar"
    } else if (display.palatal && phoneme.subType.includes("palatal")) {
        color = "palatal"
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

    const handleMouseEnter = () => {
        if (mode.mode.search) {
            setMode({mode: mode.mode, text: mode.text, description: phoneme.type === "consonant" ? phoneme.subType.join(" ") : ""})
        } 
    }

    const handleMouseLeave = () => {
        if (mode.mode.search) {
            setMode({mode: mode.mode, text: mode.text, description: ""})
        }
    }

    return (
        <div className={`phoneme ${color} ${mode.mode.search ? "" : "pointer"} ${flash ? "flash" : ""}`}
        onClick={clickHandler}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {phoneme.symbol}
        </div>
    )
}

export default Phoneme