import React, { useState } from "react";
// import Spinner from "../assets/animation/spinner.png";

const Dress = ({ dress, dressHover }) => {
  const [stateIsHidden, setStateIsHidden] = useState(false);

  const handleHover = () => {
    setStateIsHidden(true);
  };

  const handleExit = () => {
    setStateIsHidden(false);
  };

  return (
    <div className="container">
      <div
        className="dress addition"
        onMouseEnter={handleHover}
        onMouseLeave={handleExit}
      >
        <img className={stateIsHidden ? "hidden" : ""} src={dress} alt="" />
        <img src={dressHover} alt="" />
      </div>
    </div>
  );
};

export default Dress;
