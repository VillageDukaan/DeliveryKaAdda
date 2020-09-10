import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  id,
  label,
  onChange,
  placeholder,
  value,
  type,
  defaultValue,
  disabled,
  min,
  max,
  accept,
}) => {
  return (
    <div className="block">
      <label htmlFor={name} className="block__label">
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        id={id}
        className="form-group block__textfield"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
        accept={accept}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextInput;
