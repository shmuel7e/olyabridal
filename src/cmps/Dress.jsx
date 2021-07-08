import React from "react";
// import Spinner from "../assets/animation/spinner.png";

const Dress = ({ dress }) => (
  <div className="container">
    <div className="dress">
      <img src={dress} alt="" />
    </div>
  </div>
);

export default React.memo(Dress);
