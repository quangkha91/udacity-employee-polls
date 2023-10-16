import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleCreateQuestion } from "../actions/questionActions";

const NewQuestion = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const onChangeFirstOption = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const onChangeSecondOption = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleCreateQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div>
      <h1 className="title">Add New Question:</h1>
      <hr className="title-line" />
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="firstOption">First Option</label>
          <input
            type="text"
            name="firstOption"
            id="firstOption"
            placeholder="Enter First Option"
            required
            value={firstOption}
            onChange={onChangeFirstOption}
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondOption">Second Option</label>
          <input
            type="text"
            name="secondOption"
            id="secondOption"
            placeholder="Enter Second Option"
            required
            value={secondOption}
            onChange={onChangeSecondOption}
          />
        </div>

        <div className="form-group">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
