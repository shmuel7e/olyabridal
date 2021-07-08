import React from "react";
import LazyImage from "../cmps/LazyImage";

const Dress = ({ dress }) => {
  return (
    <div className="container">
      <div className="dress">
        <LazyImage image={dress} />
      </div>
    </div>
  );
};

export default React.memo(Dress);
