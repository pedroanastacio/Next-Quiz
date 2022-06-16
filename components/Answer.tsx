import React from 'react';
import AnswerModel from '../model/answer';
import styles from '../styles/Answer.module.css'

interface AnswerProps {
    value: AnswerModel
    index: number
    alternative: string
    onResponse: (index: number) => void
}

const Answer: React.FC<AnswerProps> = (props) => {
    const answer = props.value
    const answerRevealed = answer.revealed ? styles.answerRevealed : ''

    return (
        <div
            className={styles.answer}
            onClick={() => props.onResponse(props.index)}
        >
            <div className={`${answerRevealed} ${styles.answerContent}`}>
                <div className={styles.front}>
                    <div className={styles.alternative}>
                        {props.alternative}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>
                    {answer.correct ?
                        <div className={styles.correct}>
                            <div>A resposta certa é...</div>
                            <div className={styles.backValue}>{answer.value}</div>
                        </div>
                        :
                        <div className={styles.wrong}>
                            <div>A resposta selecionada está errada...</div>
                            <div className={styles.backValue}>{answer.value}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Answer;