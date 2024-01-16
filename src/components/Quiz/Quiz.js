import './Quiz.scss'

import { useState, useRef } from 'react'
import { getRandomConsonants } from '../../data/phonemes'

import Question from './Question'
import Answer from './Answer'
import Result from './Result'

const Quiz = () => {

    const consonants = getRandomConsonants()
    const [questionNo, setQuestionNo] = useState(0)
    const [answer, setAnswer] = useState({voiced: "---", place: "---", manner: "---"})
    const [result, setResult] = useState(null)
    const [display, setDisplay] = useState("question")
    const correctAnswer = useRef(0)

    const checkAnswer = () => {
        // const correctAns = consonants[questionNo].subType.join(" ")
        // const selectedAns = `${answer.voiced} ${answer.place} ${answer.manner}`
        // if (selectedAns === correctAns) {
        //     console.log("CORRECT")
        // } else {
        //     console.log("INCORRECT")
        // }
        const correctAns = consonants[questionNo].subType
        const selectedAns = [answer.voiced, answer.place, answer.manner]
        
        setResult({correct: correctAns, selected: selectedAns})
        setDisplay("result")
        if (correctAns.join(" ") === selectedAns.join(" ")) {
            console.log("CORRECT")
            correctAnswer.current = correctAnswer.current + 1
        }
    }

    const newQuestion = () => {
        setQuestionNo(questionNo + 1)
        setAnswer({voiced: "---", place: "---", manner: "---"})
        setDisplay("question")
    }

    return (
        <div className="quiz">
            <Question symbol={consonants[questionNo].symbol} />
            {display === "question" ?
                <Answer answer={answer} setAnswer={setAnswer} func={checkAnswer} />
            :
                <Result result={result} func={newQuestion} />
            }
            
            <button onClick={() => console.log(correctAnswer.current)}>Score</button>
        </div>
    )
}

export default Quiz