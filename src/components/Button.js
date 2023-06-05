import './Button.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'

import { places, consonantParts, vowelParts } from '../data/groups'

const Button = ({ name, func }) => {

    const { display } = useContext(DisplayContext)
    
    let status = ""
    if (display[name] === true && (name === "vowels" || name === "consonants")) {
        status = "selected main"
    } else if (name === "vowels" || name === "consonants") {
        status = "main"
    } else if (vowelParts.includes(name) && display.vowels === false) {
        status = "inactive"
    } else if ((consonantParts.includes(name) || places.includes(name) || name === "pairs") && display.consonants === false) {
        status = "inactive"
    } else if (vowelParts.includes(name) && display.vowels === true && display[name] === true) {
        status = "selected"
    } else if ((consonantParts.includes(name) || places.includes(name) || name === "pairs") && display.consonants === true && display[name] === true) {
        status = "selected"
    } else if (name === "voiced" && display[name] === true) {
        status = "selected"
    }

    let capName = name.charAt(0).toUpperCase() + name.slice(1)
    if (capName === "Semivowels") {
        capName = "Semi-vowels"
    } else if (capName === "Labiodental") {
        capName = "Labio-dental"
    } else if (capName === "Palatoalveolar") {
        capName = "Palato-alveolar"
    }

    return (
        <div className={`button ${status} ${capName}`} onClick={() => {if (status !== "inactive") {func()}}}>
            {capName}
        </div>
    )
}

export default Button