import './ControlPanel.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'
import { consonantParts, places } from '../data/groups'

import Button from './Button'

const ControlPanel = () => {

    const { display, setDisplay } = useContext(DisplayContext)

    const handleChange = (key) => {
        if (key === "consonants") {
            const newObj = { ...display }
            newObj.pairs = false
            newObj.plosives = false
            newObj.fricatives = false
            newObj.affricates = false
            newObj.nasals = false
            newObj.approximants = false
            newObj.semivowels = false
            newObj.bilabial = false
            newObj.labiodental = false
            newObj.dental = false
            newObj.alveolar = false
            newObj.palatoalveolar = false
            newObj.postalveolar = false
            newObj.palatal = false
            newObj.velar = false
            newObj.glottal = false
            newObj.consonants = !display.consonants
            setDisplay(newObj)
        } else if (key === "vowels") {
            const newObj = { ...display }
            newObj.monophthongs = false
            newObj.diphthongs = false
            newObj.short = false
            newObj.long = false
            newObj.vowels = !display.vowels
            setDisplay(newObj)
        }
    }

    const handlePlace = (consonantFeature) => {
        const newObj = { ...display }
        if (places.includes(consonantFeature)) {
            Object.keys(newObj).forEach((key) => {
                if (consonantParts.includes(key)) {
                    newObj[key] = false
                }
                newObj[consonantFeature] = !display[consonantFeature]
                newObj.voiced = false
            })
        } else if (consonantParts.includes(consonantFeature)) {
            Object.keys(newObj).forEach((key) => {
                if (places.includes(key)) {
                    newObj[key] = false
                }
                newObj[consonantFeature] = !display[consonantFeature]
                newObj.voiced = false
            })
        } else if (consonantFeature === "voiced") {
            Object.keys(newObj).forEach((key) => {
                newObj[key] = false
            })
            newObj[consonantFeature] = !display[consonantFeature]
            newObj["pairs"] = display["pairs"]
            newObj.consonants = display.consonants
            newObj.vowels = display.vowels
            newObj.monophthongs = display.monophthongs
            newObj.diphthongs = display.diphthongs
        } else {
            newObj[consonantFeature] = !display[consonantFeature]
        }
        setDisplay(newObj)
    }

    const handleVowels = (input) => {
        const newObj = { ...display }
        newObj.voiced = false
        newObj[input] = !display.input
        setDisplay(newObj)
    }

    return (
        <div className="controlPanel">
            <div className="controlPanel_vowels">
                <Button func={() => handleChange("vowels")} name={"vowels"} />
                <div>
                    <Button func={() => setDisplay((prev) => {return {...prev, monophthongs: !display.monothongs}})} name={"monophthongs"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, diphthongs: !display.diphthongs}})} name={"diphthongs"} />
                    <Button func={() => handleVowels("short")} name={"short"} />
                    <Button func={() => handleVowels("long")} name={"long"} />
                </div>
            </div>
            <div className="controlPanel_consonants">
                <Button func={() => handleChange("consonants")} name={"consonants"} />
                <div className="controlPanel_consonants_container">
                    <div>
                        <Button func={() => handlePlace("bilabial")} name={"bilabial"} />
                        <Button func={() => handlePlace("labiodental")} name={"labiodental"} />
                        <Button func={() => handlePlace("dental")} name={"dental"} />
                        <Button func={() => handlePlace("alveolar")} name={"alveolar"} />
                        <Button func={() => handlePlace("palatoalveolar")} name={"palatoalveolar"} />
                        <Button func={() => handlePlace("postalveolar")} name={"postalveolar"} />
                        <Button func={() => handlePlace("palatal")} name={"palatal"} />
                        <Button func={() => handlePlace("velar")} name={"velar"} />
                        <Button func={() => handlePlace("glottal")} name={"glottal"} />
                    </div>
                    <div>
                        <Button func={() => handlePlace("plosives")} name={"plosives"} />
                        <Button func={() => handlePlace("fricatives")} name={"fricatives"} />
                        <Button func={() => handlePlace("affricates")} name={"affricates"} />
                        <Button func={() => handlePlace("nasals")} name={"nasals"} />
                        <Button func={() => handlePlace("approximants")} name={"approximants"} />
                        <Button func={() => handlePlace("semivowels")} name={"semivowels"} />
                        
                    </div>
                </div>
            </div>
            <div className="controlPanel_voiced">
                <div className="controlPanel_voiced_buttons">
                    <Button func={() => handlePlace("voiced")} name={"voiced"} />
                    <Button func={() => handlePlace("pairs")} name={"pairs"} />
                </div>
                <div className="controlPanel_voiced_voicedCon" style={{visibility: `${display.voiced ? "visible" : "hidden"}`}}>
                    <div className="controlPanel_voiced_voiceless">
                        <div>voiceless</div>
                        <div>(light)</div>
                    </div>
                    <div className="controlPanel_voiced_voiced">
                        <div>voiced</div>
                        <div>(dark)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel