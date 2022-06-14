import { shuffle } from '../../../functions/arrays';
import { questions } from '../questionsBank';

const handler = (req, res) => {
    const questionsIds = questions.map(question => question.id)
    res.status(200).json(shuffle(questionsIds))
}

export default handler