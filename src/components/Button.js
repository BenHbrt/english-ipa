import './Button.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'

const Button = ({ name, func }) => {

    const { display } = useContext(DisplayContext)
    const vowelParts = ["monophthongs", "diphthongs", "short", "long"]
    const consonantParts = ["fricatives", "affricates", "plosives", "pairs", "nasals", "approximants"]

    let status = ""
    if (display[name] === true && (name === "vowels" || name === "consonants")) {
        status = "selected main"
    } else if (name === "vowels" || name === "consonants") {
        status = "main"
    } else if (vowelParts.includes(name) && display.vowels === false) {
        status = "inactive"
    } else if (consonantParts.includes(name) && display.consonants === false) {
        status = "inactive"
    } else if (vowelParts.includes(name) && display.vowels === true && display[name] === true) {
        status = "selected"
    } else if (consonantParts.includes(name) && display.consonants === true && display[name] === true) {
        status = "selected"
    } else if (name === "voiced" && display[name] === true) {
        status = "selected"
    }

    let capName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className={`button ${status} ${capName}`} onClick={() => {if (status !== "inactive") {func()}}}>
            {capName}
        </div>
    )
}

export default Button