import { questions } from '../questionsBank';

const handler = (req, res) => {
  const { id } = req.query;

  const filteredQuestions = questions.filter(question => question.id === +id);
  
  if (filteredQuestions.length === 1) {
    const question = filteredQuestions[0].shuffleAnswers()
    res.status(200).json(question.toObject())
  } else {
    res.status(204).send()
  }
}

export default handler
