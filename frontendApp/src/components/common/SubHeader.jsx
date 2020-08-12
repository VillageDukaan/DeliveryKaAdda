import React from "react";
import PropTypes from "prop-types";

const SubHeader = ({ heading, image, name }) => {
  return (
    <section className="sub-header">
      <div className="row">
        <div className="col-1-of-2">
          <h1 className="heading-primary util-margin-left-medium">{heading}</h1>
        </div>
        <div className="col-1-of-2">
          <img src={image} alt={name} className="sub-header__image" />
        </div>
      </div>
    </section>
  );
};

SubHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SubHeader;
