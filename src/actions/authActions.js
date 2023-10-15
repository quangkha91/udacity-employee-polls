export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = (state) => ({
  type: LOGIN_ERROR,
  payload: state
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (username, password) => (dispatch, getState) => {
  const { users } = getState();
  const user = Object.values(users.data).find(
    (user) => user.id === username && user.password === password
  );
  if (!!user) {
    loginError(undefined)
    return dispatch(loginSuccess(user));
  }
  // Handle login failure
  return dispatch(loginError("Login failed. Please check your credentials."));
};
