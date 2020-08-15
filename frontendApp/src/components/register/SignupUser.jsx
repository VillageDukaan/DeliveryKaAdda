import React from "react";
import SubHeader from "../common/SubHeader.jsx";
import { SIGN_UP } from "./../common/Strings";

import User from "../../assets/images/user.png";

const SignupUser = () => {
  return (
    <>
      <SubHeader
        heading={SIGN_UP.user}
        image={User}
        img_size="util-image-height-small"
      />
      <div className="form__container">
        <div className="util-margin-bottom-medium">
          <a href={SIGN_UP.uri} className="btn-text">
            &#8592; Go Back
          </a>
        </div>
        <h2 className="secondary-heading util-margin-bottom-small">
          User Sign up soon!
        </h2>
        <p className="paragraph">
          We will open our User registrations soon. Right now we are taking
          registartions for Delivery Boys to start providing services to you
          ASAP.
        </p>
      </div>
    </>
  );
};

export default SignupUser;
