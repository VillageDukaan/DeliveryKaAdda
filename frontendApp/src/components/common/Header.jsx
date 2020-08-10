import React from "react";
import MyLogo from "../../assets/images/delivery-ka-adda-2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={MyLogo} alt="Logo" className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
