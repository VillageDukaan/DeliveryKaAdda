import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Delivery from "../../assets/images/coverr-bicycle-food-delivery.mp4";

const StoriesSection = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={Delivery} type="video/mp4" />
          Your browser is not supported
        </video>
      </div>
      <div className="util-center-text util-margin-bottom-big">
        <h2 className="secondary-heading">Our Stories</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <FontAwesomeIcon className="story__img" icon={faUser} />
            <figcaption className="story__caption">Lova Katari</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary util-margin-bottom-small">
              Delivery of what I requested was seemless
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              corporis! Nostrum ducimus placeat enim? Beatae unde enim, est
              nihil excepturi maxime praesentium laborum, illum officia corrupti
              repudiandae! Quasi, at repudiandae.
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <FontAwesomeIcon className="story__img" icon={faUser} />
            <figcaption className="story__caption">Phani</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary util-margin-bottom-small">
              Fantastic Delivery
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              corporis! Nostrum ducimus placeat enim? Beatae unde enim, est
              nihil excepturi maxime praesentium laborum, illum officia corrupti
              repudiandae! Quasi, at repudiandae.
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <FontAwesomeIcon className="story__img" icon={faUser} />
            <figcaption className="story__caption">Sam Sundar</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary util-margin-bottom-small">
              Items are really good!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              corporis! Nostrum ducimus placeat enim? Beatae unde enim, est
              nihil excepturi maxime praesentium laborum, illum officia corrupti
              repudiandae! Quasi, at repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="util-center-text util-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default StoriesSection;
