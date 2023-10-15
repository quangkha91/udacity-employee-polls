import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from "../actions/authActions"
const initialState = {
  isAuthenticated: false,
  user: null,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;