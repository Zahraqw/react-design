import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/parent.css";
import Room from "./Room";
import Input from "./Input";
import { ProductProvider } from "./ProductContext";

function Parent() {
  const [productOption, setProductOption] = useState([]);

  useEffect(() => {}, [productOption]);

  return (
    <div>
      <Container className="main-container" fluid="true">
        <Row>
          <Col className="col-lg-4 col-md-4  col-sm-4 col-4 first-col">
            <ProductProvider value={productOption}>
              <Input />
            </ProductProvider>
          </Col>
          <Col className="col-lg-8 col-md-8 col-sm-8 col-8 second-col">
            <Room addProductInfo={setProductOption} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Parent;
