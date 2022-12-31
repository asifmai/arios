import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Detail() {
  return (
    <div>
      <div className="detail">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="detailCard">
                <div className="mainHeading odd">01</div>
                <div className="mainHeading">
                  Quality Unique
                  <br />
                  Design
                </div>
                <p className="mainText">
                  Style, color scheme, and other components are selected and
                  designed in accordance with your corporate identity and brand
                  philosophy.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="detailCard">
                <div className="mainHeading odd">02</div>
                <div className="mainHeading">
                  User-friendly
                  <br />
                  Interface
                </div>
                <p className="mainText">
                  Our creative designers will ensure user friendly navigation
                  with easy-to-use interfaces that will increase your conversion
                  rate.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="detailCard">
                <div className="mainHeading odd">03</div>
                <div className="mainHeading">
                  SEO
                  <br />
                  Ready
                </div>
                <p className="mainText">
                  Our designers incorporate SEO-ready components with on-page
                  search engine optimization with a view to increasing your
                  Google ranking fast
                </p>
              </div>
            </Col>
          </Row>
          {/* row 2 */}
          <Row>
            <Col lg={4}>
              <div className="detailCard">
                <div className="mainHeading odd">04</div>
                <div className="mainHeading">
                  Responsive
                  <br />
                  Design
                </div>
                <p className="mainText">
                  All websites created by us strong visual appeal on all devices
                  like PCs, laptops, tablets, phablets, kindles, notebooks, and
                  mobile phones.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="detailCard">
                <div className="mainHeading odd">05</div>
                <div className="mainHeading">
                  Cross Browser
                  <br />
                  Compatibility
                </div>
                <p className="mainText">
                  Different browsers display websites in their own way resulting
                  in variations. Our design ensures that your website will be
                  displayed correctly on all browsers.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="detailCard">
                <div className="mainHeading odd">06</div>
                <div className="mainHeading">
                  High Website
                  <br />
                  Speed
                </div>
                <p className="mainText">
                  We ensure quick page loading with cache clearing built in, to
                  enhance user experience, conversions, and the greatest
                  possibility of improving your site’s search ranking.
                </p>
              </div>
            </Col>
          </Row>
          {/* row 3 */}
          <Row>
            <Col className="mx-auto" lg={9}>
              <Row>
                <Col lg={6}>
                  <div className="detailCard">
                    <div className="mainHeading odd">07</div>
                    <div className="mainHeading">
                      Handy Content
                      <br />
                      Management System
                    </div>
                    <p className="mainText">
                      We use WordPress, the best CMS in the world, for website
                      development. This allows anyone without experience to
                      publish their content and easily add pages.
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="detailCard">
                    <div className="mainHeading odd">08</div>
                    <div className="mainHeading">
                      Constant Customer
                      <br />
                      Support
                    </div>
                    <p className="mainText">
                      We don’t just build and deliver your site with a passion
                      for perfection, we are with you to extend technical
                      support to solve any problems that may arise going
                      forward.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
