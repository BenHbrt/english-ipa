import './ModeButton.scss'

import { useContext } from 'react'
import { ModeContext } from '../App'

const ModeButton = ({ name }) => {

    const { mode, setMode } = useContext(ModeContext)

    const func = () => {
        setMode((...prev) => {
            return {
                text: mode.text, mode: name
            }
        })
    }

    return (
        <div className="modeButton" onClick={() => {if (mode.mode !== name) {func()}}}>
            <img src={require(`../img/${name}_${mode.mode === name ? "600" : "300" }.png`)} />
        </div>
    )
}

export default ModeButton