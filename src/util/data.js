import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function createQuestion(optionOne, optionTwo, userId) {
    return _saveQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: userId
    });
}

export async function updateQuestionAnswer(userId, questionId, answer) {
    return await _saveQuestionAnswer({
        authedUser: userId,
        qid: questionId,
        answer
    });
}