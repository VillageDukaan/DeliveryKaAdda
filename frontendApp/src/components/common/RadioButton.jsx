import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ label, type, name, onClick }) => {
  return (
    <>
      <label className="container">
        {label}
        <input
          type={type}
          name={name}
          className="container__radio"
          onClick={onClick}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadioButton;
