import './Keyboard.scss'

import { useContext } from 'react'
import { ModeContext } from '../App'

const Keyboard = () => {

    const { mode, setMode } = useContext(ModeContext)
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(mode.text)
    }

    const reset = () => {
        setMode({
            mode: "keyboard",
            text: ""
        })
    }

    const deleteFunc = () => {
        let newText = mode.text
        if (newText.length > 3) {
            newText = mode.text.slice(0, -2) + "/"
        } else {
            newText = ""
        }
        setMode({
            mode: "keyboard",
            text: newText
        })
    }

    const keyFunc = (symbol) => {
        let newText = mode.text
        if (mode.text.length) {
            if (symbol === " ") {
                newText = mode.text.slice(0, -1).concat("\u00A0", "/")
            } else {
                newText = mode.text.slice(0, -1) + symbol + "/"
            }
            
        } else {
            newText = "/" + symbol + "/"
        }
        setMode({mode: mode.mode, text: newText})
    }

    return (
        <div className="keyboard">
            <div className="keyboard_syllables">
                <div onClick={() => keyFunc("ˈ")}>ˈ</div>
                <div onClick={() => keyFunc("ˌ")}>ˌ</div>
                <div onClick={() => keyFunc(".")}>.</div>
                <div onClick={() => keyFunc(" ")}>
                    <img src={require("../img/space.png")} alt={""} />
                </div>
                <div onClick={deleteFunc}>
                    <img src={require('../img/backspace.png')} alt={""} />
                </div>
            </div>
            <div className="keyboard_control">
                <div className="button" onClick={copyToClipboard}>Copy</div>
                <div className="button" onClick={reset}>Reset</div>
            </div> 
            <div className="keyboard_display">{mode.text}</div>   
        </div>
    )
}

export default Keyboard