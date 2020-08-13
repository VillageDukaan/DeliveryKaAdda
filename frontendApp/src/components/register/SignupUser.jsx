import React from "react";
import SubHeader from "../common/SubHeader.jsx";
import { SIGN_UP_USER, SIGN_UP_URI } from "./../common/Strings";

import User from "../../assets/images/user.png";

const SignupUser = () => {
  return (
    <>
      <SubHeader
        heading={SIGN_UP_USER}
        image={User}
        img_size="util-image-height-small"
      />
      <div className="signup__container">
        <div className="signup__container--form">
          <div className="util-margin-bottom-medium">
            <a href={SIGN_UP_URI} className="btn-text">
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
      </div>
    </>
  );
};

export default SignupUser;
