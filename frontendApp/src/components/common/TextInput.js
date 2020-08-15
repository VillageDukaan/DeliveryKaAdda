import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  type,
  disabled,
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
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextInput;
