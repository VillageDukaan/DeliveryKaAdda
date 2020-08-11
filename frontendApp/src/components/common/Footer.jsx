import React from "react";
import LogoChar from "../../assets/images/character-2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={LogoChar} alt="Logo Character" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by VillageDukaan. Copyright &copy; by VillageDukaan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
