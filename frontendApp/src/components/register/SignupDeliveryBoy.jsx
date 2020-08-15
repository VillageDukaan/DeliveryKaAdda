import React, { useState } from "react";
import SubHeader from "../common/SubHeader.jsx";
import { SIGN_UP } from "./../common/Strings";
import PropTypes from "prop-types";
import DB from "../../assets/images/delivery_boy.png";
import { signup, authenticate, isAuthenticated } from "./../../api/auth/index";
import SignupForm from "./SignupForm.jsx";
import GoBack from "../common/GoBack.jsx";
import { toast } from "react-toastify";
import Spinner from "./../common/Spinner.jsx";
import { Redirect } from "react-router-dom";

const SignupDeliveryBoy = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    passwordConfirm: "",
    error: "",
    role: "delivery-boy",
    loading: false,
    redirect: false,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const {
    name,
    email,
    mobile,
    password,
    passwordConfirm,
    role,
    loading,
  } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      mobile,
      password,
      passwordConfirm,
      role,
    };

    setValues({
      ...values,
      loading: true,
    });

    signup(user).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          loading: false,
        });
        toast.error(data.error);
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            loading: false,
            redirect: true,
          });
        });
        toast.success("Signup Successful");
        history.push("/");
      }
    });
  };

  const renderRedirect = () => {
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      {renderRedirect()}
      <SubHeader
        heading={SIGN_UP.delivery_boy}
        image={DB}
        img_size="util-image-height-small"
      />
      <div className="form__container">
        <GoBack uri={SIGN_UP.uri} />
        <h2 className="secondary-heading util-margin-bottom-small">Signup</h2>
        {loading ? (
          <Spinner />
        ) : (
          <SignupForm
            name={name}
            email={email}
            mobile={mobile}
            password={password}
            passwordConfirm={passwordConfirm}
            role={role}
            handleChange={handleChange}
            clickSubmit={clickSubmit}
          />
        )}
      </div>
    </>
  );
};

SignupDeliveryBoy.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignupDeliveryBoy;
