import React from "react";
import PropTypes from "prop-types";
import TextInput from "./../common/TextInput";
import { SIGN_UP } from "../common/Strings";
import RadioCheckboxButton from "./../common/RadioCheckboxButton.jsx";

const SignupForm = ({
  name,
  email,
  mobile,
  password,
  passwordConfirm,
  handleChange,
  clickSubmit,
}) => (
  <form>
    <TextInput
      label={SIGN_UP.name_label}
      type={"text"}
      onChange={handleChange("name")}
      value={name}
      placeholder={SIGN_UP.name_placeholder}
    />
    <TextInput
      label={SIGN_UP.email_label}
      type={"text"}
      onChange={handleChange("email")}
      value={email}
      placeholder={SIGN_UP.email_placeholder}
    />
    <TextInput
      label={SIGN_UP.mobile_label}
      type={"number"}
      onChange={handleChange("mobile")}
      value={mobile}
      placeholder={SIGN_UP.mobile_placeholder}
    />
    <TextInput
      label={SIGN_UP.password_label}
      type={"password"}
      onChange={handleChange("password")}
      value={password}
      placeholder={SIGN_UP.password_placeholder}
    />
    <TextInput
      label={SIGN_UP.confirm_password_label}
      type={"password"}
      onChange={handleChange("passwordConfirm")}
      value={passwordConfirm}
      placeholder={SIGN_UP.confirm_password_placeholder}
    />
    <TextInput
      label={SIGN_UP.role_lable}
      type={"role"}
      value={"Delivery Person"}
      disabled
    />
    <RadioCheckboxButton
      label="I am over 18 years old"
      name={"checkbox"}
      type={"checkbox"}
    />
    <RadioCheckboxButton
      label="I have a Two Wheeler and a Drivers Licence"
      name={"checkbox"}
      type={"checkbox"}
    />
    <RadioCheckboxButton
      label="I have a Smart Phone"
      name={"checkbox"}
      type={"checkbox"}
    />
    <RadioCheckboxButton
      label="I have an Aadhaar Card"
      name={"checkbox"}
      type={"checkbox"}
    />
    <button
      className="btn btn--purple util-margin-top-small"
      onClick={clickSubmit}
    >
      Sign Up
    </button>
  </form>
);

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  clickSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.number.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default SignupForm;
