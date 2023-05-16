import './Keyboard.scss'

import { useContext } from 'react'
import { ModeContext } from '../App'

const Keyboard = () => {

    const { mode, setMode } = useContext(ModeContext) 

    return (
        <div className="keyboard">
            <input type="text" value={mode.text} />
        </div>
    )
}

export default Keyboard