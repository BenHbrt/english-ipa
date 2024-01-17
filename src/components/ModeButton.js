import './ModeButton.scss'

import { useContext } from 'react'
import { ModeContext } from '../App'

const ModeButton = ({ name }) => {

    const { mode, setMode } = useContext(ModeContext)

    const func = () => {
        const newModeObj = { ...mode, mode: { ...mode.mode, [name]: !mode.mode[name]}}
        if (name === "quiz") {
            if (mode.mode.quiz === true) {
                newModeObj.mode.search = false
                newModeObj.mode.keyboard = false
                newModeObj.mode.sound = true
                newModeObj.mode.quiz = false
                setMode(newModeObj)
            } else {
                newModeObj.mode.search = false
                newModeObj.mode.keyboard = false
                newModeObj.mode.sound = false
                newModeObj.mode.quiz = true
                setMode(newModeObj)
            }

        } else {
            newModeObj.mode.quiz = false
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
        
    }

    return (
        <div className="modeButton" onClick={() => func(name)}>
            {name === "quiz" ? null
            
            :
            <img src={require(`../img/${name}_${mode.mode[name] ? "600" : "300" }.png`)} alt={""} />
            }
        </div>
    )
}

export default ModeButton
{/* <div className={`modeButton_quiz ${mode.mode[name] ? "selected" : ""}`}>?</div> */}