import React from "react";
import One from "../../assets/images/one.png";
import Two from "../../assets/images/two.png";
import Three from "../../assets/images/three.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="util-center-text util-margin-bottom-big">
        <h2 className="secondary-heading">
          Delivery Persons who can help people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary util-margin-bottom-small">
            Let us help each other
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            nulla explicabo velit eaque accusantium nostrum necessitatibus quas
            pariatur dicta. Aperiam ipsum et, pariatur neque dignissimos debitis
            doloremque. Ipsum, consequatur vero!
          </p>
          <h3 className="heading-tertiary util-margin-bottom-small">
            Get products to your doosteps from far away villages
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            nulla explicabo velit eaque accusantium nostrum necessitatibus quas
            pariatur dicta. Aperiam ipsum et, pariatur neque dignissimos debitis
            doloremque. Ipsum, consequatur vero!
          </p>
          <a href="#" className="btn-text">
            Know more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={One}
              alt="1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={Two}
              alt="2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={Three}
              alt="3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
