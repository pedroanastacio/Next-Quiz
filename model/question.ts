import { shuffle } from '../functions/arrays'
import AnswerModel from './answer'

export default class QuestionModel {
    #id: number
    #wording: string
    #answers: AnswerModel[]
    #gotCorrect: boolean
  
    constructor(id: number, wording: string, answers: AnswerModel[], gotCorrect = false) {
        this.#id = id
        this.#wording = wording
        this.#answers = answers
        this.#gotCorrect = gotCorrect
    }

    get id() {
        return this.#id
    }

    get wording() {
        return this.#wording
    }

    get answers() {
        return this.#answers
    }

    get gotCorrect() {
        return this.#gotCorrect
    }

    get answered() {
        for (let answer of this.#answers) {
            if (answer.revealed) return true
        }
        return false;
    }

    answerWith(index: number): QuestionModel {
        const gotCorrect = this.#answers[index]?.correct
        const answers = this.#answers.map((answer, i) => {
            if(index === i || answer.correct)
                return answer.reveal()
            return answer
        })
        return new QuestionModel(this.#id, this.#wording, answers, gotCorrect)        
    }

    shuffleAnswers() {
        const shuffledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#wording, shuffledAnswers, this.#gotCorrect)
    }

    toObject() {
        return {
            id: this.#id,
            wording: this.#wording,
            answered: this.answered,
            gotCorrect: this.#gotCorrect,
            answers: this.#answers.map(answer => answer.toObject()),
        }
    }
}