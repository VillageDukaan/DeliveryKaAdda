import React from "react";
import PropTypes from "prop-types";
import TextInput from "./../common/TextInput";
import { SIGN_UP } from "../common/Strings";

const SigninForm = ({ email, password, handleChange, clickSubmit }) => (
  <form>
    <TextInput
      label={SIGN_UP.email_label}
      type={"text"}
      onChange={handleChange("email")}
      value={email}
      placeholder={SIGN_UP.email_placeholder}
    />
    <TextInput
      label={SIGN_UP.password_label}
      type={"password"}
      onChange={handleChange("password")}
      value={password}
      placeholder={SIGN_UP.password_placeholder}
    />
    <button
      className="btn btn--purple util-margin-top-small"
      onClick={clickSubmit}
    >
      Sign in
    </button>
  </form>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  clickSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default SigninForm;
