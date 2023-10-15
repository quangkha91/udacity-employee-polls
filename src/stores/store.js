import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';
import questionReducer from '../reducers/questionReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    questions: questionReducer
  },
});

export default store;