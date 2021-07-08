import React from "react";
import Dress from "../cmps/Dress.jsx";

const DressList = ({ collection, specialClass }) => (
  <div className={specialClass ? specialClass : ""}>
    {collection.map((collectionItem) => {
      return <Dress
       dress={collectionItem.dress}
       key={collectionItem.dress} 
       />;
    })}
  </div>
);

export default React.memo(DressList);
