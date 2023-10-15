import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { logout } from "../actions/authActions";
const PageTemplate = ({ children, userId, isReqLogin, dispatch }) => {
  const onLogoutUser = () => {
    dispatch(logout());
  };

  if (isReqLogin) {
    const redirectUrl = window.location.href
      .toString()
      .split(window.location.host)[1];
    let url =
      redirectUrl === "/" ? "/login" : `/login?redirectTo=${redirectUrl}`;
    console.log(url);
    return <Navigate to={url} />;
  }

  return (
    <>
      <Sidebar />
      <section className="content">
        <Header userId={userId} onHandleLogout={onLogoutUser} />
        <div className="main-content">{children}</div>
      </section>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  userId: auth?.user?.id,
  isReqLogin: !auth.isAuthenticated,
});

export default connect(mapStateToProps)(PageTemplate);
