import React, { useState } from "react";
import "./css/product.css";

function Material() {
  const [selectedItem, setselectedItem] = useState("");
  const onChangeValue = (e) => {
    setselectedItem(e.target.value);
  };
  return (
    <div className="product-info">
      <h6>Top and Bottom Rail Color</h6>
      <div className="option-group" onChange={onChangeValue}>
        <input type="radio" value="Fabric" name="color" className="item" />
        Fabric Wrapped
        <input type="radio" value="Brushed" name="color" className="item" />
        Brushed NicKel
        <input type="radio" value="Bronze" name="color" className="item" />
        Bronze
      </div>
    </div>
  );
}

export default Material;
