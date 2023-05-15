import './Phoneme.scss'

const Phoneme = ({ phoneme }) => {
    return (
        <div className="phoneme">
            {phoneme.symbol}
        </div>
    )
}

export default Phoneme