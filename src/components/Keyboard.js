import './Keyboard.scss'

import { useContext } from 'react'
import { ModeContext } from '../App'

const Keyboard = () => {

    const { mode, setMode } = useContext(ModeContext)
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(mode.text)
    }

    const handleChange = (e) => {
        setMode(() => {
            return {
                mode: "keyboard",
                text: e.target.value
            }
        })
    } 

    return (
        <div className="keyboard">
            <input type="text" value={mode.text} onChange={handleChange}/>
            <button onClick={copyToClipboard}>Copy</button>
        </div>
    )
}

export default Keyboard