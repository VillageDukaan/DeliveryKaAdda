import React from "react";
import MyLogo from "../../assets/images/delivery-ka-adda-2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-1-of-2 header__logo-box">
          <Link to="/">
            <img src={MyLogo} alt="Logo" className="header__logo" />
          </Link>
        </div>
        <div className="col-1-of-2 header__auth-box">
          <Link to="/signin" className="btn btn--white">
            Sign in
          </Link>
          <Link to="/signup" className="btn btn--purple">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
