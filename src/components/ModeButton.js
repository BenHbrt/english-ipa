import './ModeButton.scss'

import { useContext } from 'react'
import { ModeContext } from '../App'

const ModeButton = ({ name }) => {

    const { mode, setMode } = useContext(ModeContext)

    const func = () => {
        const newModeObj = { ...mode, mode: { ...mode.mode, [name]: !mode.mode[name]}}
        let isUnselected = false
        Object.keys(newModeObj.mode).forEach((item) => {
            if (newModeObj.mode[item]) {
                isUnselected = true
            }
        })
        if (!isUnselected) {
            if (name === "keyboard" || name === "search") {
                newModeObj.mode.sound = true
            } else {
                newModeObj.mode.keyboard = true
            }
        }
        if (!newModeObj.mode.keyboard) {
            newModeObj.text = ""
        }
        setMode(newModeObj)
    }

    return (
        <div className="modeButton" onClick={() => func(name)}>
            <img src={require(`../img/${name}_${mode.mode[name] ? "600" : "300" }.png`)} alt={""} />
        </div>
    )
}

export default ModeButton