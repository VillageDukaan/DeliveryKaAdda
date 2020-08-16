import React from "react";
import { signout } from "../../api";

const Signout = () => {
  return (
    <a
      href="/"
      onClick={() => signout()}
      className="btn-text util-margin-top-small"
    >
      Signout
    </a>
  );
};

export default Signout;
