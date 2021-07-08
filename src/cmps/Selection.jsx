import React from "react";
import Z1 from "../assets/images/selection/selectionIMG.jpg";
import Z2 from "../assets/images/selection/selectionIMG2.jpg";
import Socials from "./Socials";

const Selection = () => (
  <div>
    <div className="selection-container flex justify-center">
      <div className="Z1">
        <img src={Z1} alt="" />
      </div>

      <div className="selection-item selection-card flex column">
        <div className="selection-header">Modern. Elegant. Unforgettable.</div>
        <div className="selection-btns flex column">
          <a href="#bridal">
            {" "}
            <button>Bridal ss2021</button>{" "}
          </a>
          <a href="/2020">
            {" "}
            <button>קולקציות קודמות</button>{" "}
          </a>
          <a href="https://api.whatsapp.com/send?phone=972548233442">
            {" "}
            <button>יצירת קשר</button>{" "}
          </a>
          <a href="#contact">
            {" "}
            <button>קצת עלינו</button>{" "}
          </a>
        </div>
        <div className="flex justify-center selection-social">
          <Socials isSelectionCard={true} />
        </div>
      </div>
      <div className="Z1">
        <img src={Z2} alt="" />
      </div>
    </div>
  </div>
);
export default React.memo(Selection);
