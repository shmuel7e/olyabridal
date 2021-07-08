import React from "react";
import C1 from "../assets/images/Bridal/L/L1.jpg";
import C2 from "../assets/images/Evening/X3.jpg";
import C3 from "../assets/images/Evening/X2.jpg";
import C4 from "../assets/images/Evening/X1.jpg";
import Instagram from "../assets/images/ICONS/instagramBlack.svg";
import Facebook from "../assets/images/ICONS/FacebookBlack.svg";
import Tiktok from "../assets/images/ICONS/TiktokBlack.svg";
import Youtube from "../assets/images/ICONS/YoutubeBlack.svg";
import LazyImage from "./LazyImage";

const Follow = () => (
  <div className="flex column align-center follow">
    <div className="follow-header">רשתות חברתיות</div>
    <div className="follow-img-container flex">
      <div className="relative follow-img">
        <LazyImage image={C1} />
        <a href="https://www.instagram.com/olya_bridal/">
          <img className="social-follow" src={Instagram} alt=""></img>
        </a>
      </div>
      <div className="relative follow-img">
        <LazyImage image={C2} />
        <a href="https://www.facebook.com/Olya_dresses-100865561397566">
          <img className="social-follow" src={Facebook} alt=""></img>
        </a>
      </div>
      <div className="relative follow-img">
        <LazyImage image={C3} />
        <a href="https://www.youtube.com/channel/UCM7n4_5D5WlYY9ACPHul1lQ">
          <img className="social-follow" src={Youtube} alt=""></img>
        </a>
      </div>
      <div className="relative follow-img">
        <LazyImage image={C4} />
        <a href="https://vm.tiktok.com/Jdtykab/">
          <img className="social-follow" src={Tiktok} alt=""></img>
        </a>
      </div>
    </div>
  </div>
);

export default React.memo(Follow);
