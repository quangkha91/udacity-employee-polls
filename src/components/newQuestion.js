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
          <label htmlFor="firstOption" data-testid="firstOptionLabel">
            First Option
          </label>
          <input
            value={firstOption}
            onChange={onChangeFirstOption}
            type="text"
            name="firstOption"
            id="firstOption"
            data-testid="firstOption"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondOption" data-testid="secondOptionLabel">
            Second Option
          </label>
          <input
            value={secondOption}
            onChange={onChangeSecondOption}
            type="text"
            name="secondOption"
            id="secondOption"
            data-testid="secondOption"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" data-testid="submit-poll">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(NewQuestion);
