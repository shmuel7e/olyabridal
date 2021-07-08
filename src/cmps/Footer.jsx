import React from "react";
import Socials from "./Socials";
import footerLOGO from "../assets/images/Logos/BgLogo.png";

const Footer = () => (
  <div className="footer-container flex column align-center">
    <div className="footer-logo">
      <img src={footerLOGO} alt="" />
    </div>
    <Socials isSelectionCard={true} />
    <div className="flex small-dots">
      <div>FAQ</div>
      <div>DELIVERY AND RETURNS</div>
      <div>PRESS</div>
      <div>PRIVACY POLICY</div>
      <div>TERMS OF USE</div>
      <div>CONTACT US</div>
      <div>ABOUT US</div>
    </div>
  </div>
);

export default React.memo(Footer);
