import './Result.scss'

const Result = ({ result, func }) => {

    let correct  = false
    if (result.correct.join(" ") === result.selected.join(" ")) {
        correct = true
    }

    return (
        <div className="result">
            <div>{correct ? "CORRECT" : "INCORRECT"}</div>
            <div>Answer: {result.correct.join(" ")}</div>
            {correct ?
                null
            :
                <div>Your answer: {result.selected.map((item, i) => {
                    if (item === result.correct[i]) {
                        return <span>{item} </span>
                    } else {
                        return <span><strong>{item} </strong></span> 
                    }
                    
                })}</div>
            }
            <button onClick={func}>Next</button>
        </div>
    )
}

export default Result