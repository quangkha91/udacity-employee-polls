export const INITIAL_USERS = "INITIAL_USERS";
export const USER_ANSWER_VOTE = "USER_ANSWER_VOTE";
export const USER_CREATE_QUESTION = "USER_CREATE_QUESTION";

export function updateAnswerUser(loginUser, questionId, answer) {
  return {
    type: USER_ANSWER_VOTE,
    payload: {
      userId: loginUser,
      qid: questionId,
      answer,
    },
  };
}

export function createQuestionUser( userId, questionId ) {
  return {
    type: USER_CREATE_QUESTION,
    payload: {
      userId,
      qid: questionId,
    },
  };
}
