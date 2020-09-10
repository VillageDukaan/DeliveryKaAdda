import React, { useState } from "react";
import SubHeader from "../common/SubHeader.jsx";
import SignIn from "../../assets/images/1.png";
import SigninForm from "./SigninForm.jsx";
import { post, authenticate, isAuthenticated } from "./../../api/index";
import { toast } from "react-toastify";
import GoBack from "../common/GoBack.jsx";
import { SIGN_UP } from "../common/Strings.js";
import Spinner from "./../common/Spinner.jsx";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirect: false,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const { email, password, loading, redirect } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
      redirect,
    };

    setValues({
      ...values,
      loading: true,
    });

    const uri = "users/login";
    post(user, uri).then((data) => {
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
        toast.success("Signin Successful");
      }
    });
  };

  const renderRedirect = () => {
    if (
      isAuthenticated() &&
      isAuthenticated().data.role === "delivery_boy" &&
      !isAuthenticated().data.user.isApplicationSubmitted
    ) {
      return <Redirect to="/delivery-person-application" />;
    }
    if (redirect || isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div>
      {renderRedirect()}
      <SubHeader
        heading="Signin"
        image={SignIn}
        img_size="util-image-height-small"
      />
      <div className="form__container">
        <GoBack uri={SIGN_UP.uri} />
        <h2 className="secondary-heading util-margin-bottom-small">Signin</h2>
        {loading ? (
          <Spinner />
        ) : (
          <SigninForm
            handleChange={handleChange}
            clickSubmit={clickSubmit}
            email={email}
            password={password}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Signin;
