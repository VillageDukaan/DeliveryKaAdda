import React, { useState } from "react";
import RadioButton from "../common/RadioCheckboxButton.jsx";
import {
  SIGN_UP_TITLE,
  SIGN_UP_USER,
  SIGN_UP_DELIVERY_BOY,
  SIGN_UP_USER_URI,
  SIGN_UP_DELIVERY_BOY_URI,
} from "./../common/Strings";
import SubHeader from "../common/SubHeader.jsx";
import Question from "../../assets/images/question_mark.png";
import { Redirect } from "react-router-dom";

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
    if (direct.redirect) {
      return <Redirect to={direct.uri} />;
    }
  };

  return (
    <div className="signup">
      {renderRedirect()}
      <SubHeader
        heading={SIGN_UP_TITLE}
        image={Question}
        name={SIGN_UP_TITLE}
        img_size="util-image-height-small"
      />
      <div className="signup__container">
        <div className="signup__container--form">
          <h2 className="secondary-heading util-margin-bottom-small">
            Please Choose
          </h2>
          <RadioButton
            label={SIGN_UP_USER}
            name={"radio"}
            type={"radio"}
            onClick={() => redirectTo(SIGN_UP_USER_URI)}
          />
          <RadioButton
            label={SIGN_UP_DELIVERY_BOY}
            name={"radio"}
            type={"radio"}
            onClick={() => redirectTo(SIGN_UP_DELIVERY_BOY_URI)}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
