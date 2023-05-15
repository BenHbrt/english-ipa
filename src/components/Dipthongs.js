import './Dipthongs.scss'

import { useContext } from 'react'
import { getDipthongs } from '../data/phonemes'
import { DisplayContext } from '../App'

import Phoneme from './Phoneme'

const Dipthongs = () => {

    const dipthongs = getDipthongs()
    const { display } = useContext(DisplayContext)

    return (
        <div className="dipthongs" style={{borderColor: `${display.dipthongs ? "orange" : "transparent"}`}}>
            {
                dipthongs.map((dipthongs, i) => {
                    return <Phoneme phoneme={dipthongs} key={i} />
                })
            }
        </div>
    )
}

export default Dipthongs