import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "./card";
import { getNewQuestions, getCompletedQuestions } from "../util/utilities";

const Dashboard = ({ loginUser, users, questions }) => {
  const [newQuestions, setNewQuestions] = useState();
  const [completedQuestions, setCompletedQuestions] = useState();
  useEffect(() => {
    const sortQuestions = Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
    );
    setNewQuestions(getNewQuestions(sortQuestions, loginUser.id));
    setCompletedQuestions(getCompletedQuestions(sortQuestions, loginUser.id));
  }, [questions, loginUser]);

  return (
    <div>
      <h1 className="title">New questions:</h1>
      <hr className="title-line" />
      <div className="card-group">
        {newQuestions?.map((q) => (
          <Card question={q} author={users[q.author]} key={q.id} />
        ))}
      </div>

      <h1 className="title">Answered questions:</h1>
      <hr className="title-line" />
      <div className="card-group">
        {completedQuestions?.map((q) => (
          <Card question={q} author={users[q.author]} key={q.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, users, questions }) => ({
  loginUser: auth.user,
  users: users.data,
  questions: questions.data,
});

export default connect(mapStateToProps)(Dashboard);
