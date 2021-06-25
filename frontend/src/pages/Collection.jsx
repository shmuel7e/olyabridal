import React from "react";
import DressList from "../cmps/DressList";
import useHideHeader from "../hooks/useHideHeader";
import A1 from "../../src/assets/images/2020/A/A1.jpg";
import A2 from "../../src/assets/images/2020/A/A2.jpg";
import _A1 from "../../src/assets/images/2021/A/A1.jpg";
import _A2 from "../../src/assets/images/2021/A/A2.jpg";

const collection1 = [{ dress: A1, dressHover: A2 }];
const collection2 = [{ dress: _A1, dressHover: _A2 }];

const Collection = () => {
  useHideHeader();
  return (
    <div className="collection">
      <div className="collectionA">
        <a href="/2020">
          <div className="collection-title">COLLECTION 2020</div>
          <DressList collection={collection1} />
        </a>
      </div>
      <div className="collectionB">
        <a href="/2021">
          <div className="collection-title"> COLLECTION 2021</div>
          <DressList collection={collection2} />
        </a>
      </div>
    </div>
  );
};

export default Collection;
