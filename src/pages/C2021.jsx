import React from "react";
import useHideHeader from "../hooks/useHideHeader";
import DressList from "../cmps/DressList";
import A1 from "../assets/images/2021/A/A1.jpg";
import A2 from "../assets/images/2021/A/A2.jpg";
import B1 from "../assets/images/2021/B/B1.jpg";
import B2 from "../assets/images/2021/B/B2.jpg";
import C1 from "../assets/images/2021/C/C1.jpg";
import C2 from "../assets/images/2021/C/C2.jpg";
import D1 from "../assets/images/2021/D/D1.jpg";
import D2 from "../assets/images/2021/D/D2.jpg";
import E1 from "../assets/images/2021/E/E1.jpg";
import E2 from "../assets/images/2021/E/E2.jpg";
import F1 from "../assets/images/2021/F/F1.jpg";
import F2 from "../assets/images/2021/F/F2.jpg";
import G1 from "../assets/images/2021/G/G1.jpg";
import G2 from "../assets/images/2021/G/G2.jpg";
import H1 from "../assets/images/2021/H/H1.jpg";
import H2 from "../assets/images/2021/H/H2.jpg";
import I1 from "../assets/images/2021/I/I1.jpg";
import I2 from "../assets/images/2021/I/I2.jpg";
import J1 from "../assets/images/2021/J/J1.jpg";
import J2 from "../assets/images/2021/J/J2.jpg";

const collection2021 = [
  { dress: E1 },
  { dress: A1 },
  { dress: C1 },
  { dress: D1 },
  { dress: I1 },
  { dress: G1 },
  { dress: B1 },
  { dress: H1 },
  { dress: F1 },
  { dress: J1 },
  { dress: E2 },
  { dress: A2 },
  { dress: C2 },
  { dress: D2 },
  { dress: I2 },
  { dress: G2 },
  { dress: B2 },
  { dress: H2 },
  { dress: F2 },
  { dress: J2 },
];

const C2021 = () => {
  useHideHeader();
  return (
    <div className="c2021">
      <button className="back">
        {" "}
        <a href="/">חזרה</a>
      </button>
      <DressList
        specialClass={"imageCollectionList"}
        collection={collection2021}
      />
    </div>
  );
};

export default React.memo(C2021);
