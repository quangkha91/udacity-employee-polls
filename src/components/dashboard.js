import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNewQuestions, getCompletedQuestions } from "../util/utilities";
import ToggleSwitch from "./toggleSwitch";
import ListQuestions from "./listQuestions";

const Dashboard = ({ loginUser, users, questions }) => {
  const [newQuestions, setNewQuestions] = useState();
  const [completedQuestions, setCompletedQuestions] = useState();
  //isSwitchDisplay: false -> show new questions | true -> show completed questions
  const [isSwitchDisplay, setIsSwitchDisplay] = useState(false);

  useEffect(() => {
    const sortQuestions = Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
    );
    setNewQuestions(getNewQuestions(sortQuestions, loginUser.id));
    setCompletedQuestions(getCompletedQuestions(sortQuestions, loginUser.id));
  }, [questions, loginUser]);

  const onSwitchChange = () => {
    setIsSwitchDisplay(!isSwitchDisplay);
  };
  return (
    <div>
      <div className="contain-switch">
        <ToggleSwitch
          isChecked={isSwitchDisplay}
          onSwitchChange={onSwitchChange}
        />
      </div>
      {isSwitchDisplay ? (
        <ListQuestions
          title="Answered questions"
          questions={completedQuestions}
          users={users}
        />
      ) : (
        <ListQuestions
          title="New questions"
          questions={newQuestions}
          users={users}
        />
      )}
      {/* <div>
        <h1 className="title">New questions:</h1>
        <hr className="title-line" />
        <div className="card-group">
          {newQuestions?.map((q) => (
            <Card question={q} author={users[q.author]} key={q.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="title">Answered questions:</h1>
        <hr className="title-line" />
        <div className="card-group">
          {completedQuestions?.map((q) => (
            <Card question={q} author={users[q.author]} key={q.id} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = ({ auth, users, questions }) => ({
  loginUser: auth.user,
  users: users.data,
  questions: questions.data,
});

export default connect(mapStateToProps)(Dashboard);
