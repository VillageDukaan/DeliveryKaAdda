import React from "react";
import SubHeader from "../common/SubHeader.jsx";
import { SIGN_UP_DELIVERY_BOY, SIGN_UP_URI } from "./../common/Strings";
import DB from "../../assets/images/delivery_boy.png";
import SignupForm from "./SignupForm.jsx";

const SignupDeliveryBoy = () => {
  return (
    <>
      <SubHeader
        heading={SIGN_UP_DELIVERY_BOY}
        image={DB}
        img_size="util-image-height-small"
      />
      <div className="signup__container">
        <div className="signup__container--form">
          <div className="util-margin-bottom-medium">
            <a href={SIGN_UP_URI} className="btn-text">
              &#8592; Go Back
            </a>
          </div>
          <h2 className="secondary-heading util-margin-bottom-small">Signup</h2>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default SignupDeliveryBoy;
