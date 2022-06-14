import React, { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import styles from '../styles/Home.module.css'

const testQuestion = new QuestionModel(1, 'Qual a melhor cor?', [
  AnswerModel.wrong('Azul'),
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelho'),
  AnswerModel.correct('Preto')
])

const Home: React.FC = () => {

  const [question, setQuestion] = useState(testQuestion)

  const onResponse = (index: number) => {
    setQuestion(question.answerWith(index))
  }

  const onTimeout = () => {
    setQuestion(question.answerWith(-1))
  }

  return (
    <div className={styles.container} style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      height: '100vh'
    }}>
      <Question
        value={question}
        onResponse={onResponse}
        onTimeout={onTimeout}
      />
    </div>
  )
}

export default Home