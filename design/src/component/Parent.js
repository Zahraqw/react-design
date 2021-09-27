import React from "react";
import "./css/parent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Room from "./Room";
import Input from "./Input";

function Parent() {
  return (
    <div>
      <Container className="main-container" fluid="true">
        <Row>
          <Col className="col-lg-4 col-md-4  col-sm-4 col-4 first-col">
            <Input />
          </Col>
          <Col className="col-lg-8 col-md-8 col-sm-8 col-8 second-col">
            <Room />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Parent;
