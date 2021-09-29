import React, { useState } from "react";
import "./css/product.css";
import { ProductConsumer } from "./ProductContext";

function Product(props) {
  const [productOption, setProductOption] = useState([]);
  const onChangeValue = (e) => {
    props.productChecked({ selected: true, value: e.target.value });
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
          <h6>{productOption[0].title}</h6>
          <div className="option-group" onChange={onChangeValue}>
            <span className="radio-wrapper">
              <input
                type="radio"
                value={productOption[0].product1}
                name="Product"
                className="item"
              />
            </span>

            {productOption[0].product1}
            <span className="radio-wrapper">
              <input
                type="radio"
                value={productOption[0].product2}
                name="Product"
                className="item"
              />
              {productOption[0].product2}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Product;
