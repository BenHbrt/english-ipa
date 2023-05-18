import './Monothongs.scss'

import { useContext } from 'react'
import { getVowels } from '../data/phonemes'
import { DisplayContext } from '../App'

import Phoneme from './Phoneme'

const Vowels = () => {

    const vowels = getVowels()
    const { display } = useContext(DisplayContext)

    return (
        <div className={`monothongs ${display.monothongs ? "monothongsLine" : ""}`}>
            {
                vowels.map((vowel, i) => {
                    return <Phoneme phoneme={vowel} key={i} />
                })
            }
        </div>
    )
}

export default Vowels