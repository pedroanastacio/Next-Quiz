import AnswerModel from '../../model/answer';
import QuestionModel from '../../model/question';

export const questions: QuestionModel[] = [
    new QuestionModel(1, 'Em qual mapa o Brasil consquistou seu primeiro Major?', [
        AnswerModel.wrong('Train'),
        AnswerModel.wrong('Inferno'),
        AnswerModel.wrong('Mirage'),
        AnswerModel.correct('Overpass')
    ]),
    new QuestionModel(2, 'Quantas vezes "coldzera" foi eleito o melhor jogador do mundo de CSGO?', [
        AnswerModel.wrong('1'),
        AnswerModel.wrong('4'),
        AnswerModel.wrong('3'),
        AnswerModel.correct('2')
    ]),
    new QuestionModel(3, 'Qual desses mapas possui uma homenagem a um jogador brasileiro por uma jogada icônica?', [
        AnswerModel.wrong('Vertigo'),
        AnswerModel.wrong('Inferno'),
        AnswerModel.wrong('Overpass'),
        AnswerModel.correct('Mirage')
    ]),
    new QuestionModel(4, 'Qual desses mapas foi removido do map pool no ano de 2021?', [
        AnswerModel.wrong('Aztec'),
        AnswerModel.wrong('Cobblestone'),
        AnswerModel.wrong('Cache'),
        AnswerModel.correct('Train')
    ]),
]