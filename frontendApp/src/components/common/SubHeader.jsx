import React from "react";
import PropTypes from "prop-types";

const SubHeader = ({ heading, image, img_size }) => {
  return (
    <section className="sub-header">
      <div className="row">
        <div className="col-1-of-2">
          <h1 className="heading-primary util-margin-left-medium">{heading}</h1>
        </div>
        <div className="col-1-of-2">
          <img
            src={image}
            alt={heading}
            className={`sub-header__image ${img_size}`}
          />
        </div>
      </div>
    </section>
  );
};

SubHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  img_size: PropTypes.string.isRequired,
};

export default SubHeader;
