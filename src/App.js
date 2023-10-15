import "./App.css";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/sharedActions";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PageTemplate from "./components/pageTemplate";
import Leaderboard from "./components/leaderboard";
import NewQuestion from "./components/newQuestion";
import DetailQuestion from "./components/detailQuestion";
import BadRequest from "./components/badRequest";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PageTemplate>
                <Dashboard />
              </PageTemplate>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PageTemplate>
                <Dashboard />
              </PageTemplate>
            }
          />
          <Route
            path="/leader-board"
            element={
              <PageTemplate>
                <Leaderboard />
              </PageTemplate>
            }
          />
          <Route
            path="/new-question"
            element={
              <PageTemplate>
                <NewQuestion />
              </PageTemplate>
            }
          />
          <Route
            path="/questions/:id"
            element={
              <PageTemplate>
                <DetailQuestion />
              </PageTemplate>
            }
          />
          <Route
            path="/400"
            element={
              <PageTemplate>
                <BadRequest />
              </PageTemplate>
            }
          />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2023 Employee Project</p>
      </footer>
    </>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
