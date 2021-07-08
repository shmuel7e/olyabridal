import React from "react";
import D2 from "../assets/images/Bridal/D/D2.jpg";

const Evening = () => (
  <div id="evening" className="evening-section">
    <div className="evening-section-container flex">
      <div className="evening-text-section">
        <div className="evening-section-header">קולקציה 2020</div>
        <div className="evening-text">שמלות המעוצבות בתפירה עילית </div>
        <div className="evening-text">,ובהתאמה אישית </div>
        <div className="evening-text">
          .תוך תשומת לב רבה לפרטים הקטנים ביותר
        </div>
        <div className="evening-text">
          .שימוש בסגנון מודרני ויוקרתי באיכותו ובמראהו
        </div>
        <div className="evening-text">כך שכל שמלה הינה שמלת כלה </div>
        <div className="evening-text">.מרהיבה ובלתי נשכחת </div>
        <button className="evening-button">
          {" "}
          <div className="container">
            <ul>
              <li>
                <a className="animated-arrow" href="/2020">
                  <span className="the-arrow -left">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text">לצפייה בקולקציה</span>
                    <span className="the-arrow -right">
                      <span className="shaft"></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </button>
      </div>
      <div className="evening-img-section">
        <img src={D2} alt="" />
      </div>
    </div>
  </div>
);

export default React.memo(Evening);
