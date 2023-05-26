import './ControlPanel.scss'

import { useContext } from 'react'
import { DisplayContext } from '../App'

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
            newObj.consonants = !display.consonants
            setDisplay(newObj)
        } else if (key === "vowels") {
            const newObj = { ...display }
            newObj.monothongs = false
            newObj.dipthongs = false
            newObj.short = false
            newObj.long = false
            newObj.vowels = !display.vowels
            setDisplay(newObj)
        }
    }

    return (
        <div className="controlPanel">
            <div className="controlPanel_vowels">
                <Button func={() => handleChange("vowels")} name={"vowels"} />
                <div>
                    <Button func={() => setDisplay((prev) => {return {...prev, monothongs: !display.monothongs}})} name={"monothongs"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, dipthongs: !display.dipthongs}})} name={"dipthongs"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, short: !display.short}})} name={"short"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, long: !display.long}})} name={"long"} />
                </div>
            </div>
            <div className="controlPanel_consonants">
                <Button func={() => handleChange("consonants")} name={"consonants"} />
                <div>
                    <Button func={() => setDisplay((prev) => {return {...prev, plosives: !display.plosives}})} name={"plosives"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, fricatives: !display.fricatives}})} name={"fricatives"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, affricates: !display.affricates}})} name={"affricates"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, nasals: !display.nasals}})} name={"nasals"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, approximants: !display.approximants}})} name={"approximants"} />
                    <Button func={() => setDisplay((prev) => {return {...prev, pairs: !display.pairs}})} name={"pairs"} />
                </div>
            </div>
            <div className="controlPanel_voiced">
                <Button func={() => setDisplay((prev) => {return {...prev, voiced: !display.voiced}})} name={"voiced"} />
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