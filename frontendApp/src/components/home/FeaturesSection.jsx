import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faAddressCard,
  faTruckLoading,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon className="feature-box__icon" icon={faStore} />
            <h3 className="heading-tertiary util-margin-bottom-small">
              Deliveries Made Easy
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon
              className="feature-box__icon"
              icon={faAddressCard}
            />
            <h3 className="heading-tertiary util-margin-bottom-small">
              Deliveries Made Easy
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon
              className="feature-box__icon"
              icon={faPeopleCarry}
            />
            <h3 className="heading-tertiary util-margin-bottom-small">
              Deliveries Made Easy
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <FontAwesomeIcon
              className="feature-box__icon"
              icon={faTruckLoading}
            />
            <h3 className="heading-tertiary util-margin-bottom-small">
              Deliveries Made Easy
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
