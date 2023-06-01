import './Diphthongs.scss'

import { useContext } from 'react'
import { getDiphthongs } from '../data/phonemes'
import { DisplayContext } from '../App'

import Phoneme from './Phoneme'

const Diphthongs = () => {

    const diphthongs = getDiphthongs()
    const { display } = useContext(DisplayContext)

    return (
        <div className={`diphthongs ${display.diphthongs ? "diphthongsLine" : ""}`}>
            {
                diphthongs.map((diphthongs, i) => {
                    return <Phoneme phoneme={diphthongs} key={i} />
                })
            }
        </div>
    )
}

export default Diphthongs