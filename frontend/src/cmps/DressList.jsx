import React from "react";
import Dress from "../cmps/Dress.jsx";

const DressList = ({ collection, specialClass }) => {
  return (
    <div className={specialClass ? specialClass : ""}>
      {collection.map((collectionItem) => {
        return (
          <Dress
            dress={collectionItem.dress}
            dressHover={collectionItem.dressHover}
            key={collectionItem.dress}
          />
        );
      })}
    </div>
  );
};

export default DressList;
