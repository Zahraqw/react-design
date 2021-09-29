import React, { useState } from "react";
import "./css/product.css";
import { ProductConsumer } from "./ProductContext";

function Material(props) {
  const [productOption, setProductOption] = useState([]);
  const onChangeValue = (e) => {
    props.materialChecked({ selected: true, value: e.target.value });
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
          <h6>{productOption[2].title}</h6>
          <div className="option-group" onChange={onChangeValue}>
            <input
              type="radio"
              value={productOption[2].color1}
              name="color"
              className="item"
            />
            {productOption[2].color1}
            <input
              type="radio"
              value={productOption[2].color2}
              name="color"
              className="item"
            />
            {productOption[2].color2}
            <input
              type="radio"
              value={productOption[2].color3}
              name="color"
              className="item"
            />
            {productOption[2].color3}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Material;
