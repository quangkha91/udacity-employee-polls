import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = ({ dispatch, isAuthenticated, loginError }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("tylermcginnis");
  const [password, setPassword] = useState("abc321");
  useEffect(() => {
    checkRedirect(isAuthenticated);
  });

  const checkRedirect = (isAuth) => {
    if (isAuth) {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get("redirectTo");
      return navigate(redirectUrl ? redirectUrl : "/");
    }
  };

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    // Attempt to login using the provided credentials
    await dispatch(login(username, password));
  };
  return (
    <div className="login-container" data-testid="login-page">
      <form onSubmit={onHandleSubmit}>
        <h2 className="title">Login</h2>
        <hr className="title-line" />
        <div className="login-form-group">
          <label htmlFor="uname">Username:</label>
          <input
            name="username"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={onChangeUsername}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        {loginError && (
          <div className="login-form-group">
            <p className="error-message" data-testid="login-error">
              {loginError}
            </p>
          </div>
        )}
        <div className="login-form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  loginError: auth.error,
});

export default connect(mapStateToProps)(Login);
