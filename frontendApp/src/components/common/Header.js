import React from "react";
import MyLogo from "../../assets/images/delivery-ka-adda.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={MyLogo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main"> Delivery</span>
          <span className="heading-primary--sub">in your location</span>
        </h1>

        <a href="#" className="btn btn--white">
          Find Delivery Boy
        </a>
      </div>
    </header>
  );
};

export default Header;
