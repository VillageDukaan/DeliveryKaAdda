import React from "react";
import { signout } from "../../api/auth";

const Signout = () => {
  return (
    <a href="/" onClick={() => signout()} className="btn-text">
      Signout
    </a>
  );
};

export default Signout;
