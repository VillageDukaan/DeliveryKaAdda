import React from "react";
import MyLogo from "../../assets/images/delivery-ka-adda-2.png";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./../../api/auth/index";
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
              to="/signin"
              className="btn-text util-margin-top-small util-margin-right-small"
            >
              Sign in
            </Link>
            <Link to="/signup" className="btn-text">
              Sign up
            </Link>
          </>
        ) : (
          <Signout />
        )}
      </div>
    </div>
  );
};

export default Header;
