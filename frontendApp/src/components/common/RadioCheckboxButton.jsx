import React from "react";
import PropTypes from "prop-types";

const RadioCheckboxButton = ({ label, type, name, onClick }) => {
  return (
    <>
      <label className="container">
        {label}
        <input
          type={type}
          name={name}
          onClick={onClick}
          className="container__input"
        />
        <span className={`checkmark checkmark__${type}`}></span>
      </label>
    </>
  );
};

RadioCheckboxButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadioCheckboxButton;
