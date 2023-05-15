import './Consonants.scss'

import { getConsonants } from '../data/phonemes'

import Phoneme from './Phoneme'

const Consonants = () => {

    const consonants = getConsonants()

    return (
        <div className="consonants">
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[0]} />
                <Phoneme phoneme={consonants[1]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[2]} />
                <Phoneme phoneme={consonants[3]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[4]} />
                <Phoneme phoneme={consonants[5]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[6]} />
                <Phoneme phoneme={consonants[7]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[8]} />
                <Phoneme phoneme={consonants[9]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[10]} />
                <Phoneme phoneme={consonants[11]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[12]} />
                <Phoneme phoneme={consonants[13]} />
            </div>
            <div className="consonants_pair">
                <Phoneme phoneme={consonants[14]} />
                <Phoneme phoneme={consonants[15]} />
            </div>
            <div className="consonants_nasal">
                <Phoneme phoneme={consonants[16]} />
                <Phoneme phoneme={consonants[17]} />
                <Phoneme phoneme={consonants[18]} />
            </div>
            <div className="consonants_h">
                <Phoneme phoneme={consonants[19]} />
            </div>
            <div className="consonants_approximant">
                <Phoneme phoneme={consonants[20]} />
                <Phoneme phoneme={consonants[21]} />
                <Phoneme phoneme={consonants[22]} />
                <Phoneme phoneme={consonants[23]} />
            </div>
        </div>
    )
}

export default Consonants