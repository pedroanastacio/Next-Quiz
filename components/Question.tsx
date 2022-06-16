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
    timeToAnswer?: number
    onTimeout: () => void
}

const Question: React.FC<QuestionProps> = (props) => {
    const question = props.value

    const renderAnswers = () => {
        return question.answers.map((answer, i) => {
            return <Answer
                key={`${question.id}-${i}`}
                value={answer}
                index={i}
                alternative={alternatives[i].value}
                onResponse={props.onResponse}
            />
        })
    }

    return (
        <div className={styles.question}>
            {question.notAnswered ?
                <Countdown
                    key={question.id}
                    duration={props.timeToAnswer ?? 30}
                    onTimeout={props.onTimeout}
                />
                : false
            }
            <Wording text={question.wording} />
            {renderAnswers()}
        </div>
    );
}

export default Question;