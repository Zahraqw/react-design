import React, { useState } from "react";
import "./css/product.css";

function Headrail() {
  const [selectedItem, setselectedItem] = useState("");
  const onChangeValue = (e) => {
    setselectedItem(e.target.value);
  };
  return (
    <div className="product-info">
      <h6>Top and Bottom Rail model</h6>
      <div className="option-group" onChange={onChangeValue}>
        <input type="radio" value="aluminum" name="Headrail" className="item" />
        aluminum Headrail
        <input type="radio" value="Iron" name="Headrail" className="item" />
        Iron Headrail
      </div>
    </div>
  );
}

export default Headrail;
