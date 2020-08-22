import React from "react";
import MyLogo from "../../assets/images/delivery-ka-adda-2.png";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "./../../api/index";
import Signout from "./Signout.jsx";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={MyLogo} alt="Logo" className="header__logo" />
      </Link>
      <div className="header__auth-box">
        {!isAuthenticated() ? (
          <>
            <Link
              to="/signup"
              className="btn-text__secondary util-margin-right-small"
            >
              Sign up
            </Link>
            <Link to="/signin" className="btn-text util-margin-top-small">
              Sign in
            </Link>
          </>
        ) : (
          <Signout />
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
