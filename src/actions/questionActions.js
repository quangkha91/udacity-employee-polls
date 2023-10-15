import { createQuestion, updateQuestionAnswer } from "../util/data";
import { createQuestionUser, updateAnswerUser } from "./userActions";

export const INITIAL_QUESTIONS = "INITIAL_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function createNewQuestion(question) {
  return {
    type: CREATE_QUESTION,
    payload: {
      question,
    },
  };
}

function answerQuestion(userId, questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    payload: {
      userId,
      qid: questionId,
      answer,
    },
  };
}

export function handleCreateQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { auth } = getState();

    return createQuestion(firstOption, secondOption, auth.user).then(
      (question) => {
        dispatch(createNewQuestion(question));
        dispatch(createQuestionUser(auth.user.id, question.id));
      }
    );
  };
}

export function handleUpdateAnswer(questionId, answer) {
  return async (dispatch, getState) => {
    const { auth } = getState();
    await updateQuestionAnswer(auth.user.id, questionId, answer).then(() => {
      dispatch(answerQuestion(auth.user.id, questionId, answer));
      dispatch(updateAnswerUser(auth.user.id, questionId, answer));
    });
  };
}
