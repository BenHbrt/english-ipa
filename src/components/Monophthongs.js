import './Monophthongs.scss'

import { useContext } from 'react'
import { getMonophthongs } from '../data/phonemes'
import { DisplayContext } from '../App'

import Phoneme from './Phoneme'

const Monophthongs = () => {

    const monophthongs = getMonophthongs()
    const { display } = useContext(DisplayContext)

    return (
        <div className={`monophthongs ${display.monophthongs ? "monophthongsLine" : ""}`}>
            {
                monophthongs.map((monophthong, i) => {
                    return <Phoneme phoneme={monophthong} key={i} />
                })
            }
        </div>
    )
}

export default Monophthongs