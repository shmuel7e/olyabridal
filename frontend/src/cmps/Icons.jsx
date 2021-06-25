import React from "react";
// icons //
import phoneICON from "../assets/images/ICONS/Phone.svg";
import fbmsnICON from "../assets/images/ICONS/FacebookMSN.svg";
import whatsappICON from "../assets/images/ICONS/Whatsapp.svg";

const Icons = ({ shouldDisplayFB, specialClass, specialIconClass }) => {
  return (
    <div className={`${specialClass} icons-sticky`}>
      <a href="tel:‎+972548233442">
        {" "}
        <span>
          {" "}
          <img
            className={`${specialIconClass} contact-icons`}
            src={phoneICON}
            alt=""
          />
        </span>{" "}
      </a>
      {shouldDisplayFB && (
        <a href="https://www.facebook.com/messages/t/100865561397566">
          <span>
            {" "}
            <img
              className={`${specialIconClass} contact-icons`}
              src={fbmsnICON}
              alt=""
            />
          </span>{" "}
        </a>
      )}
      <a href="https://api.whatsapp.com/send?phone=972548233442">
        {" "}
        <span>
          {" "}
          <img
            className={`${specialIconClass} contact-icons`}
            src={whatsappICON}
            alt=""
          />
        </span>{" "}
      </a>
    </div>
  );
};

Icons.defaultProps = {
  shouldDisplayFB: true,
};

export default Icons;
