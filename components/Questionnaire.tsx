import React from 'react';
import styles from '../styles/Questionnaire.module.css'
import QuestionModel from '../model/question'
import Question from './Question';
import Button from './Button';

interface QuestionnaireProps {
    question: QuestionModel
    lastQuestion: boolean
    answeredQuestion: (question: QuestionModel) => void
    nextStep: () => void
}

const Questionnaire: React.FC<QuestionnaireProps> = (props) => {

    const onResponse = (index: number) => {
        if(props.question.notAnswered)
            props.answeredQuestion(props.question.answerWith(index))
    }

    return (
        <div className={styles.questionnaire}>
            <Question
                value={props.question}
                onResponse={onResponse}
                onTimeout={props.nextStep}
            />
            <Button onClick={props.nextStep}>
                {props.lastQuestion ? 'Finalizar' : 'Próxima'}
            </Button>
        </div>
    );
}

export default Questionnaire;