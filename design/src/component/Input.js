import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import "./css/input.css";
import { BsList } from "react-icons/bs";
import Product from "./Product";
import Material from "./Material";
import Headrail from "./Headrail";
import Dialog from "./Dialog";

function Input() {
  const [productchecked, setProductChecked] = useState({
    selected: false,
    value: "",
  });
  const [materialchecked, setMaterialChecked] = useState({
    selected: false,
    value: "",
  });
  const [headrialchecked, setHeadrialChecked] = useState({
    selected: false,
    value: "",
  });
  const [enableBuyBtn, setEnableBuyBtn] = useState(true);
  const [show, setShow] = useState(false);
  const [productDescription, setProductDescription] = useState([]);

  useEffect(() => {
    setProductDescription([
      productchecked.value,
      materialchecked.value,
      headrialchecked.value,
    ]);
    productchecked.selected &&
    materialchecked.selected &&
    headrialchecked.selected
      ? setEnableBuyBtn(false)
      : setEnableBuyBtn(true);
  }, [productchecked, materialchecked, headrialchecked]);

  const handleBuyBtn = () => {
    setShow(true);
  };
  return (
    <div className="main-block">
      <Navbar variant="dark" className="navbar-header">
        <BsList className="nav-icon" />
        <Container className="nav-container">
          <Navbar.Brand href="#">DESIGN STUDIO</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="product-title">RIGHT BASE LAYER - Shade</div>
      <div className="sidbar-container">
        <div className="roundedbtn-block">
          <div className="round-group">
            <input
              type="checkbox"
              className="check"
              checked={productchecked.selected}
              readOnly
            />
          </div>
          <div className="btn-title">PRODUCT</div>
          <div className="round-group">
            <input
              type="checkbox"
              className="check"
              checked={materialchecked.selected}
              readOnly
            />
          </div>
          <div className="btn-title">MATERIAL</div>
          <div className="round-group">
            <input
              type="checkbox"
              className="check"
              checked={headrialchecked.selected}
              readOnly
            />
          </div>
          <div className="btn-title">HEADRAIL</div>
        </div>
        <div className="material-info">
          <div className="inner-container">
            <Product productChecked={setProductChecked} />
            <Material materialChecked={setMaterialChecked} />
            <Headrail headrialChecked={setHeadrialChecked} />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-inner">
          Free In-Home
          <br />
          <b>MEASURE</b>
        </button>

        <button className="btn-inner">
          Chat with our
          <br />
          <b>DESIGNERS</b>
        </button>
        <button
          className="btn-inner btn-3"
          disabled={enableBuyBtn}
          onClick={handleBuyBtn}
        >
          Configure and
          <br />
          <b>BUY NOW</b>
        </button>
      </div>
      <Dialog
        setShow={setShow}
        show={show}
        productDescription={productDescription}
      />
    </div>
  );
}

export default Input;
