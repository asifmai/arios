import React from "react";
import { Row, Col, Container } from "react-bootstrap";
export default function Capabilities() {
  return (
    <div>
      <div className="capabilities">
        <Container>
          <Row>
            <Col lg={4}>
              <h1 className="mainHeading">Capabilities</h1>
            </Col>
            <Col className="mt-4" lg={8}>
              <Row>
                <Col lg={6}>
                  <h1 className="subHeading">Strategy</h1>
                  <p className="mainText">
                    Research
                    <br />
                    UI/UX audit
                    <br />
                    Stakeholder workshops
                    <br />
                    Product strategy
                    <br />
                    Innovation consulting
                  </p>
                  <h1 className="subHeading">Development</h1>
                  <p className="mainText">
                    HTML/CSS/JS
                    <br />
                    React/Angular
                    <br />
                    Backend/API integrations
                    <br />
                    iOS/Android native apps
                    <br />
                    Rapid prototyping
                  </p>
                </Col>
                <Col lg={6}>
                  <h1 className="subHeading">Design</h1>
                  <p className="mainText">
                    UI/UX design
                    <br />
                    Brand identity
                    <br />
                    Websites and mobile apps
                    <br />
                    Visual design
                    <br />
                    Prototyping and testing
                    <br />
                  </p>
                  <h1 className="subHeading">Content</h1>
                  <p className="mainText">
                    Copywriting
                    <br />
                    Video
                    <br />
                    Animation
                    <br />
                    Iconography
                    <br />
                    2D/3D graphics
                    <br />
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
