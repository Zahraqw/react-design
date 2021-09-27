import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Col, Row } from "react-bootstrap";
import "./css/input.css";
import { BsList } from "react-icons/bs";
import Product from "./Product";
import Material from "./Material";
import Headrail from "./Headrail";

function Input() {
  const [btn1Clicked, setBtn1Clicked] = useState(false);
  const [btn2Clicked, setBtn2Clicked] = useState(false);
  const [btn3Clicked, setBtn3Clicked] = useState(false);

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
          <button
            className="round-group"
            onClick={() => {
              setBtn1Clicked(true);
            }}
          >
            btn1
          </button>
          <div className="btn-title">PRODUCT</div>
          <button
            className="round-group"
            onClick={() => {
              setBtn2Clicked(true);
            }}
          >
            btn2
          </button>
          <div className="btn-title">MATERIAL</div>
          <button
            className="round-group"
            onClick={() => {
              setBtn3Clicked(true);
            }}
          >
            btn3
          </button>
          <div className="btn-title">HEADRAIL</div>
        </div>
        <div className="material-info">
          <div className="inner-container">
            {btn1Clicked && <Product />}
            {btn2Clicked && <Material />}
            {btn3Clicked && <Headrail />}
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn">
          Free In-Home
          <br />
          <b>MEASURE</b>
        </button>
        <button className="btn">
          Chat with our
          <br />
          <b>DESIGNERS</b>
        </button>
        <button className="btn btn-3">
          Configure and
          <br />
          <b>BUY NOW</b>
        </button>
      </div>
    </div>
  );
}

export default Input;
