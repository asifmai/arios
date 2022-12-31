import React from "react";
import fullStack from "../public/img/fullStack.png";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
export default function FullStak() {
  return (
    <div>
      <div className="fullStack">
        <Container>
          <Row>
            <Col className="my-lg-auto" lg={5}>
              <h1 className="mainHeading">FullStack</h1>
              <p className="mainText">
                Our team is well versed in all front end and backend
                technologies. Here’s a few of them.
              </p>
            </Col>
            <Col lg={7}>
              <Image src={fullStack} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
