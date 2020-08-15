import React, { useState } from "react";
import RadioButton from "../common/RadioCheckboxButton.jsx";
import { SIGN_UP } from "./../common/Strings";
import SubHeader from "../common/SubHeader.jsx";
import Question from "../../assets/images/question_mark.png";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "./../../api/auth/index";

const Signup = () => {
  const [direct, setRedirect] = useState({
    redirect: false,
    uri: "",
  });

  const redirectTo = (uri) => {
    setRedirect({
      redirect: true,
      uri,
    });
  };

  const renderRedirect = () => {
    if (direct.redirect || isAuthenticated) {
      return <Redirect to={direct.uri} />;
    }
  };

  return (
    <div className="signup">
      {renderRedirect()}
      <SubHeader
        heading={SIGN_UP.title}
        image={Question}
        name={SIGN_UP.title}
        img_size="util-image-height-small"
      />
      <div className="form__container">
        <h2 className="secondary-heading util-margin-bottom-small">
          Please Choose
        </h2>
        <RadioButton
          label={SIGN_UP.user}
          name={"radio"}
          type={"radio"}
          onClick={() => redirectTo(SIGN_UP.user_uri)}
        />
        <RadioButton
          label={SIGN_UP.delivery_boy}
          name={"radio"}
          type={"radio"}
          onClick={() => redirectTo(SIGN_UP.delivery_boy_uri)}
        />
      </div>
    </div>
  );
};

export default Signup;
