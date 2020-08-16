import React from "react";
import PropTypes from "prop-types";

const GoBack = ({ uri }) => (
  <div className="util-margin-bottom-medium">
    <a href={uri} className="btn-text">
      &#8592; Go Back
    </a>
  </div>
);

GoBack.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default GoBack;
