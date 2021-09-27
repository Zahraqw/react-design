import React, { useState } from "react";
import "./css/product.css";

function Product() {
  const [selectedItem, setselectedItem] = useState("");
  const onChangeValue = (e) => {
    setselectedItem(e.target.value);
  };
  return (
    <div className="product-info">
      <h6>choose Headrail and Color</h6>
      <div className="option-group" onChange={onChangeValue}>
        <input type="radio" value="Single" name="Product" className="item" />
        Single Headrail
        <input type="radio" value="Double" name="Product" className="item" />
        2-on-1 Headrail
      </div>
    </div>
  );
}

export default Product;
