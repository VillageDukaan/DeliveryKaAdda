import React from "react";
import PropTypes from "prop-types";
import TextInput from "./../common/TextInput";

const SignupForm = () => {
  return (
    <form>
      <TextInput
        label={"Full Name"}
        type={"text"}
        value={name}
        placeholder={"Please Enter Your Full Name"}
      />
      <TextInput
        label={"Email"}
        type={"text"}
        value={name}
        placeholder={"Please Enter Your Email"}
      />
      <TextInput
        label={"Mobile Number"}
        type={"text"}
        value={name}
        placeholder={"Please Enter Your Mobile number"}
      />
      <TextInput
        label={"Password"}
        type={"text"}
        value={name}
        placeholder={"Please Enter Password"}
      />
      <TextInput
        label={"Confirm Password"}
        type={"text"}
        value={name}
        placeholder={"Please Confirm Password"}
      />

      <button type="submit" className="btn btn--purple util-margin-top-small">
        {<i className="fa fa-refresh fa-spin"></i>}
        Sign Up
      </button>
    </form>
  );
};

SignupForm.propTypes = {};

export default SignupForm;
