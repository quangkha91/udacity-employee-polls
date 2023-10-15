import {
  INITIAL_USERS,
  USER_CREATE_QUESTION,
  USER_ANSWER_VOTE,
} from "../actions/userActions";
const initialState = {
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case USER_ANSWER_VOTE: {
      let newState = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [newState.userId]: {
            ...state.data[newState.userId],
            answers: {
              ...state.data[newState.userId].answers,
              [newState.qid]: newState.answer,
            },
          },
        },
      };
    }
    case USER_CREATE_QUESTION: {
      let newState = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [newState.userId]: {
            ...state.data[newState.userId],
            questions: state.data[newState.userId].questions.concat(
              newState.qid
            ),
          },
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
