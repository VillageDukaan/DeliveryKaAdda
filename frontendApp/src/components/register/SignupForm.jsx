import React from "react";
import PropTypes from "prop-types";
import TextInput from "./../common/TextInput";
import { SIGN_UP } from "../common/Strings";

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
      type={"text"}
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
    <button
      className="btn btn--purple util-margin-top-small"
      onClick={clickSubmit}
    >
      Sign Up
    </button>
  </form>
);

SignupForm.propTypes = {
  handleChange: PropTypes.func.required,
  clickSubmit: PropTypes.func.required,
  name: PropTypes.string.required,
  email: PropTypes.string.required,
  mobile: PropTypes.number.required,
  passwordConfirm: PropTypes.string.required,
  password: PropTypes.string.required,
};

export default SignupForm;
