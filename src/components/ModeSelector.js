import './ModeSelector.scss'

import ModeButton from './ModeButton'

const ModeSelector = () => {
    return (
        <div className="modeSelector">
            <ModeButton name={"sound"} />
            <ModeButton name={"keyboard"} />
            <ModeButton name={"search"} />
        </div>
    )
}

export default ModeSelector