import React from 'react';

const ToggleSwitch = ({isChecked, onSwitchChange}) => {
  return (
    <div className="toggle-switch">
      <h1>{isChecked ? 'Answered questions' :'New questions'}</h1>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onSwitchChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
