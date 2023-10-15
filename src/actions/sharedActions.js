import { INITIAL_USERS } from "./userActions";
import { INITIAL_QUESTIONS } from "./questionActions";
import { getInitialData } from "../util/data";

const initialUsers = (users) => {
  return {
    type: INITIAL_USERS,
    payload: users,
  };
};

const initialQuestions = (questions) => {
  return {
    type: INITIAL_QUESTIONS,
    payload: questions,
  };
};

export function handleInitialData() {
  return async (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(initialUsers(users));
      dispatch(initialQuestions(questions));
    });
  };
}
