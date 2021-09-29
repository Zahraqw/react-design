import React, { useState } from "react";
import "./css/product.css";
import { ProductConsumer } from "./ProductContext";

function Headrail(props) {
  const [productOption, setProductOption] = useState([]);
  const onChangeValue = (e) => {
    props.headrialChecked({ selected: true, value: e.target.value });
  };
  return (
    <div>
      <ProductConsumer>
        {(productInfo) => {
          setProductOption(productInfo);
        }}
      </ProductConsumer>
      {productOption.length > 0 ? (
        <div className="product-info">
          <h6>{productOption[1].title}</h6>
          <div className="option-group" onChange={onChangeValue}>
            <input
              type="radio"
              value={productOption[1].type1}
              name="Headrail"
              className="item"
            />
            {productOption[1].type1}
            <input
              type="radio"
              value={productOption[1].type2}
              name="Headrail"
              className="item"
            />
            {productOption[1].type2}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Headrail;
