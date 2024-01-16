import './Answer.scss'

const Answer = ({ answer, setAnswer, func }) => {  

    const handleChange = (e) => {
        const newAnswer = {...answer}
        console.log(e.target.name)
        newAnswer[e.target.name] = e.target.value
        setAnswer(newAnswer)
    }

    return (
        <div className="answer">
            <select name="voiced" onChange={handleChange}>
                <option value="---" disabled selected hidden>---</option>
                <option value="voiced">Voiced</option>
                <option value="voiceless">Voiceless</option>
            </select>
            <select name="place" onChange={handleChange}>
                <option value="---" disabled selected hidden>---</option>
                <option value="bilabial">bilabial</option>
                <option value="labio-dental">labio-dental</option>
                <option value="dental">dental</option>
                <option value="alveolar">alveolar</option>
                <option value="palato-alveolar">palato-alveolar</option>
                <option value="bpostalveolar">postalveolar</option>
                <option value="palatal">palatal</option>
                <option value="velar">velar</option>
                <option value="glottal">glottal</option>
            </select>
            <select name="manner" onChange={handleChange}>
                <option value="---" disabled selected hidden>---</option>
                <option value="plosive">plosive</option>
                <option value="fricative">fricative</option>
                <option value="affricate">affricate</option>
                <option value="nasal">nasal</option>
                <option value="approximant">approximant</option>
                <option value="lateral approximant">lateral approximant</option>
            </select>
            <div className="answer_button" onClick={func}>Submit</div>
        </div>
    )
}

export default Answer