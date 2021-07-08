import React from "react";
import useHideHeader from "../hooks/useHideHeader";
import DressList from "../cmps/DressList";
import A1 from "../assets/images/2020/A/A1.jpg";
import A2 from "../assets/images/2020/A/A8.jpg";
import A3 from "../assets/images/2020/A/A3.jpg";
import A4 from "../assets/images/2020/A/A4.jpg";
import A5 from "../assets/images/2020/A/A5.jpg";
import A6 from "../assets/images/2020/A/A6.jpg";
import A7 from "../assets/images/2020/A/A7.jpg";
import A8 from "../assets/images/2020/A/A2.jpg";
import A9 from "../assets/images/2020/A/A9.jpg";
import A10 from "../assets/images/2020/A/A10.jpg";
import A11 from "../assets/images/2020/A/A11.jpg";
import A12 from "../assets/images/2020/A/A12.jpg";
import A13 from "../assets/images/2020/A/A13.jpg";
import A14 from "../assets/images/2020/A/A14.jpg";

const collection2020 = [
  { dress: A1 },
  { dress: A2 },
  { dress: A3 },
  { dress: A4 },
  { dress: A5 },
  { dress: A6 },
  { dress: A7 },
  { dress: A8 },
  { dress: A9 },
  { dress: A10 },
  { dress: A11 },
  { dress: A12 },
  { dress: A13 },
  { dress: A14 },
];

const C2020 = () => {
  useHideHeader();
  return (
    <div className="c2020">
      <button className="back">
        {" "}
        <a href="/">חזרה</a>
      </button>
      <DressList
        specialClass={"imageCollectionList"}
        collection={collection2020}
      />
    </div>
  );
};

export default React.memo(C2020);
