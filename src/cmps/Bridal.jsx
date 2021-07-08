import React from "react";
import between from "../assets/images/between/between.jpg";
import LazyImage from "./LazyImage";

const Bridal = () => (
  <div id="bridal" className="bridal-section">
    <div className="bridal-section-container flex justify-center">
      <div className="card-container">
        <div className="collection-info">
          <div className="bridal-section-header">ss2021 קולקציה</div>
          <p className="bridal-text"> 2021 FIRE קולקציות שמלות כלה </p>
          <p className="bridal-text-addition">!זמינה בסטודיו </p>
          <div className="bridal-text"> אולה ויאנה שטיין מעצבות ובעלות</div>
          <div className="bridal-text-addition"> ,הסטודיו בנתניה</div>
          <div className="bridal-text-addition">
            {" "}
            מזמינות אותך להגיע, להתרשם ולבחור
          </div>
          <div className="bridal-text-addition"> .את שמלת הכלה שלך</div>
          <div className="bridal-text-addition">בסטודיו תמצאי מגוון שמלות</div>
          <div className="bridal-text-addition">
            .בדגמים, גזרות מחמיאות ועיצובים ייחודיים
          </div>
          <div className="bridal-text-addition">
            ,אם את מחפשת לוק כלתי מודרני
          </div>
          <div className="bridal-text-addition">עם ניחוח אלגנטי ואצילי</div>
          <div className="bridal-text-addition">!זה המקום בשבילך</div>
          <button className="bridal-button">
            <div className="container">
              <ul>
                <li>
                  <a className="animated-arrow" href="/2021">
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
      </div>
    </div>
    <div className="between">
      <LazyImage image={between} />
    </div>
  </div>
);
export default React.memo(Bridal);
