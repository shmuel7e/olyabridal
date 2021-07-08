import React from "react";
import Icons from "../cmps/Icons";

const SideBar = () => (
  <div className="side-bar">
    <Icons
      shouldDisplayFB={false}
      specialClass={"display-column"}
      specialIconClass={"special-icon"}
    />
  </div>
);

export default React.memo(SideBar);
