import {
  INITIAL_QUESTIONS,
  CREATE_QUESTION,
  ANSWER_QUESTION,
} from "../actions/questionActions";
const initialState = {
  data: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_QUESTIONS:
      return {
        ...state,
        data: action.payload,
      };
    case CREATE_QUESTION: {
      let newState = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [newState.question.id]: newState.question,
        },
      };
    }
    case ANSWER_QUESTION: {
      let newState = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [newState.qid]: {
            ...state.data[newState.qid],
            [newState.answer]: {
              ...state.data[newState.qid][newState.answer],
              votes: state.data[newState.qid][newState.answer].votes.concat(
                newState.userId
              ),
            },
          },
        },
      };
    }
    default:
      return state;
  }
};

export default questionReducer;
