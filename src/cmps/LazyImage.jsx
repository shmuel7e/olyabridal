import React from "react";
import useSpinner from "../hooks/useSpinner";

const LazyImage = ({ image, className, special }) => {
  const { onLoad, isLoading, Spinner } = useSpinner();

  return (
    <React.Fragment>
      {isLoading && <img className={special} src={Spinner} alt="" />}
      <img className={className} src={image} alt="" onLoad={onLoad} />
    </React.Fragment>
  );
};

export default React.memo(LazyImage);
