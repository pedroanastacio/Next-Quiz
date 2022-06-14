import React from 'react'
import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'
import Wording from './Wording'
import Answer from './Answer'
import Countdown from './Countdown'

const alternatives = [
    { value: 'A' },
    { value: 'B' },
    { value: 'C' },
    { value: 'D' },
]

interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
    onTimeout: () => void
}

const Question: React.FC<QuestionProps> = (props) => {
    const question = props.value

    const renderAnswers = () => {
        return question.answers.map((answer, i) => {
            return <Answer
                key={i}
                value={answer}
                index={i}
                alternative={alternatives[i].value}
                onResponse={props.onResponse}
            />
        })
    }

    return (
        <div className={styles.question}>
            <Countdown duration={15} onTimeout={props.onTimeout}/> 
            <Wording text={question.wording} />
            {renderAnswers()}
        </div>
    );
}

export default Question;