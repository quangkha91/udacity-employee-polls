import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import noAvailable from "../icons/noAvailable.png";
import { useEffect, useState } from "react";
import { handleUpdateAnswer } from "../actions/questionActions";
import { calculatePercentage } from "../util/utilities";

const DetailQuestion = ({ dispatch, loginUser, questions, users }) => {
  const [question, setQuestion] = useState();
  const [author, setAuthor] = useState();
  const [isVotedOptionOne, setIsVotedOptionOne] = useState(false);
  const [isVotedOptionTwo, setIsVotedOptionTwo] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const navigate = useNavigate();
  let { question_id } = useParams();

  useEffect(() => {
    let question = Object.values(questions).find((q) => q.id === question_id);
    if (question) {
      let author = Object.values(users).find((u) => u.id === question.author);
      let isVotedOne = question?.optionOne.votes.includes(loginUser.id);
      let isVotedTwo = question?.optionTwo.votes.includes(loginUser.id);
      let isVoted = isVotedOptionOne || isVotedOptionTwo;
      setQuestion(question);
      setAuthor(author);
      setIsVotedOptionOne(isVotedOne);
      setIsVotedOptionTwo(isVotedTwo);
      setHasVoted(isVoted);
    }
  },[questions, question_id, users, loginUser.id, isVotedOptionOne, isVotedOptionTwo]);

  const handleOptionOne = () => {
    dispatch(handleUpdateAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleOptionTwo = () => {
    dispatch(handleUpdateAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  return (
    <div>
      <h1 className="title">Poll by: {author?.id}</h1>
      <hr className="title-line" />

      <div className="poll-contain">
        {author?.avatarURL ? (
          <img src={author?.avatarURL} alt="Author" />
        ) : (
          <img src={noAvailable} alt="avatar" />
        )}
      </div>

      <div className="poll-contain">
        <h2 className="title">Would you rather?</h2>
      </div>

      <div className="poll-choice">
        <button onClick={handleOptionOne} disabled={hasVoted}>
          <div
            className={
              isVotedOptionOne ? "chosen" : hasVoted ? "not-chose" : "normal"
            }
          >
            <p className="title">{question?.optionOne.text}</p>
            {!hasVoted && <p>Click</p>}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question?.optionOne.votes.length} (
                {calculatePercentage("opOne", question)})
              </p>
            )}
          </div>
        </button>
        <button onClick={handleOptionTwo} disabled={hasVoted}>
          <div
            className={
              isVotedOptionTwo ? "chosen" : hasVoted ? "not-chose" : "normal"
            }
          >
            <p className="title">{question?.optionTwo.text}</p>
            {!hasVoted && <p>Click</p>}
            {hasVoted && (
              <p>
                Votes: {question?.optionTwo.votes.length} (
                {calculatePercentage("opTwo", question)})
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, users, questions }) => {
  return {
    loginUser: auth.user,
    users: users.data,
    questions: questions.data,
  };
};

export default connect(mapStateToProps)(DetailQuestion);
