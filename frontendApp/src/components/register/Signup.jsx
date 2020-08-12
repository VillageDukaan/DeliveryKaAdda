import React from "react";
import RadioButton from "../common/RadioButton.jsx";
import {
  SIGN_UP_TITLE,
  SIGN_UP_USER,
  SIGN_UP_DELIVERY_BOY,
} from "./../common/Strings";
import SubHeader from "../common/SubHeader.jsx";
import Question from "../../assets/images/question_mark.png";

const Signup = () => {
  return (
    <div className="signup">
      <SubHeader
        heading={SIGN_UP_TITLE}
        image={Question}
        name={SIGN_UP_TITLE}
      />
      <div className="signup__container">
        <div className="signup__container--form">
          <h2 className="secondary-heading util-margin-bottom-small">
            Please Choose
          </h2>
          <RadioButton label={SIGN_UP_USER} name={"radio"} type={"radio"} />
          <RadioButton
            label={SIGN_UP_DELIVERY_BOY}
            name={"radio"}
            type={"radio"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
