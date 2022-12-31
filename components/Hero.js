import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
export default function Hero() {
  return (
    <div>
      <div className="heroSection">
        <Container>
          <p className="heroHeading">
            Professional Web
            <br />
            Design <span>and</span>
            <br />
            Development
          </p>
          <p className="mainText">
            Deepen the connection to your brand with world-class digital
            <br />
            products and transformative user experiences.
          </p>
          <Link href="" className="mainBtn white">
            Start a project
          </Link>
          <Link href="" className="mainBtn red">
            View our work
          </Link>
        </Container>
      </div>
    </div>
  );
}
