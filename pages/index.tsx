import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Questionnaire from '../components/Questionnaire'
import QuestionModel from '../model/question'

const BASE_URL = 'http://localhost:3000/api'

const Home: React.FC = () => {

  const router = useRouter()

  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  const fetchQuestionsIds = async () => {
    const response = await fetch(`${BASE_URL}/questionnaire`)
    const questionsIds = await response.json()
    setQuestionsIds(questionsIds)
  }

  const fetchQuestion = async (questionId: number) => {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`)
    const questionObj = await response.json()
    const newQuestion = QuestionModel.fromObject(questionObj)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    fetchQuestionsIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && fetchQuestion(questionsIds[0])
  }, [questionsIds])

  const answeredQuestion = (answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion)
    const gotCorrect = answeredQuestion.gotCorrect
    setCorrectAnswers(correctAnswers + (gotCorrect ? 1 : 0))
  }

  const getNextQuestionId = (): number => {
    const nextIndex = questionsIds.indexOf(question.id) + 1
    return questionsIds[nextIndex]
  }

  const nextStep = () => {
    const nextId = getNextQuestionId()
    nextId ? nextQuestion(nextId) : finish()
  }

  const nextQuestion = (questionId: number) => {
    fetchQuestion(questionId)
  }

  const finish = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIds.length,
        correct: correctAnswers
      }
    })
  }

  return question ?
    <Questionnaire
      question={question}
      lastQuestion={getNextQuestionId() === undefined}
      answeredQuestion={answeredQuestion}
      nextStep={nextStep}
    />
    : <></>
}

export default Home