import React from "react";
import contactDress from "../assets/images/Bridal/contactDress.JPG";
import Icons from "./Icons";

const Contact = () => (
  <div id="contact" className="contact">
    <div className="contact-header">יצירת קשר</div>
    <div className="contact-container flex">
      <div className="contact-a flex column">
        <p>תקבעי פגישת ייעוץ ומדידה עם המעצבת </p>
        <p>שתעזור לך לבחור ולהבין </p>
        <p>איזה לוק כלתי הכי יתאים לך</p>
        <p>כך שתהיי שמחה ומאושרת עם החלטה שלך</p>
        <a href="https://api.whatsapp.com/send?phone=972548233442">
          {" "}
          <button className="contact-btn">יצירת קשר / קביעת פגישה</button>
        </a>
        <Icons />
      </div>
      <div className="contact-b">
        <img src={contactDress} alt="" />
      </div>
    </div>
  </div>
);
export default React.memo(Contact);
