import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InputGroup = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  type,
  disabled,
  onClick,
}) => {
  return (
    <div className="block">
      <label htmlFor={name} className="block__label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="block__textfield"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      <div className="input-group-append">
        <Link
          className="btn-text util-margin-top-small float-right"
          type="submit"
          onClick={onClick}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default InputGroup;
